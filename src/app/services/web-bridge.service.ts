import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as jsQRImport from 'jsqr';

const jsQR: any = (jsQRImport as any).default || jsQRImport;

export type WebQrHandle = { stop: () => void };

@Injectable({
  providedIn: 'root',
})
export class WebBridgeService {
  private qrOverlayEl: HTMLElement | null = null;
  private qrVideoEl: HTMLVideoElement | null = null;
  private qrStream: MediaStream | null = null;
  private qrRaf = 0;
  private qrStopped = true;
  private qrFacingMode: 'environment' | 'user' = 'environment';
  private qrSwitchBtn: HTMLButtonElement | null = null;

  private photoOverlayEl: HTMLElement | null = null;
  private photoVideoEl: HTMLVideoElement | null = null;
  private photoStream: MediaStream | null = null;
  private photoFacingMode: 'environment' | 'user' = 'environment';

  constructor(private platform: Platform) {}

  /** True when running inside Cordova/Capacitor native shell. */
  isNative(): boolean {
    return this.platform.is('hybrid') || this.platform.is('cordova') || this.platform.is('capacitor');
  }

  /**
   * Capture a photo on web using an in-app camera preview (shutter + switch).
   * Falls back to file picker if getUserMedia is unavailable.
   */
  capturePhoto(maxSize = 1280, quality = 0.5, preferCamera = true): Promise<string> {
    if (!preferCamera || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return this.pickPhotoFromGallery(maxSize, quality);
    }
    return this.capturePhotoInApp(maxSize, quality).catch(() =>
      this.pickPhotoFromGallery(maxSize, quality, false)
    );
  }

  /** In-app live camera with shutter button. */
  private capturePhotoInApp(maxSize: number, quality: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.stopPhotoCapture();
      this.photoFacingMode = 'environment';

      const overlay = document.createElement('div');
      overlay.id = 'web-photo-overlay';
      overlay.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:99998',
        'background:#000', 'display:flex', 'align-items:center', 'justify-content:center'
      ].join(';');

      const video = document.createElement('video');
      video.setAttribute('playsinline', 'true');
      video.setAttribute('autoplay', 'true');
      video.muted = true;
      video.style.cssText = 'width:100%;height:100%;object-fit:cover;transform:none;';

      const switchBtn = document.createElement('button');
      switchBtn.type = 'button';
      switchBtn.textContent = 'สลับกล้อง';
      switchBtn.style.cssText = [
        'position:absolute', 'top:28px', 'right:16px', 'z-index:100000',
        'padding:10px 16px', 'border:0', 'border-radius:8px',
        'background:rgba(0,0,0,0.65)', 'color:#fff', 'font-size:15px',
        'font-family:Kanit,sans-serif'
      ].join(';');
      switchBtn.onclick = () => {
        this.photoFacingMode = this.photoFacingMode === 'environment' ? 'user' : 'environment';
        this.openPhotoCamera(this.photoFacingMode).catch(() => { });
      };

      const galleryBtn = document.createElement('button');
      galleryBtn.type = 'button';
      galleryBtn.textContent = 'คลังรูป';
      galleryBtn.style.cssText = [
        'position:absolute', 'top:28px', 'left:16px', 'z-index:100000',
        'padding:10px 16px', 'border:0', 'border-radius:8px',
        'background:rgba(0,0,0,0.65)', 'color:#fff', 'font-size:15px',
        'font-family:Kanit,sans-serif'
      ].join(';');
      galleryBtn.onclick = () => {
        this.stopPhotoCapture();
        this.pickPhotoFromGallery(maxSize, quality, false).then(resolve, reject);
      };

      const shutterBtn = document.createElement('button');
      shutterBtn.type = 'button';
      shutterBtn.setAttribute('aria-label', 'ถ่ายรูป');
      shutterBtn.style.cssText = [
        'position:absolute', 'bottom:36px', 'left:50%', 'transform:translateX(-50%)',
        'z-index:100000', 'width:72px', 'height:72px', 'border-radius:50%',
        'border:4px solid #fff', 'background:#fff', 'box-shadow:0 0 0 4px rgba(255,255,255,0.35)',
        'padding:0'
      ].join(';');
      shutterBtn.onclick = () => {
        try {
          if (!video.videoWidth || !video.videoHeight) {
            reject('camera-not-ready');
            this.stopPhotoCapture();
            return;
          }
          const canvas = document.createElement('canvas');
          let width = video.videoWidth;
          let height = video.videoHeight;
          const scale = Math.min(1, maxSize / Math.max(width, height));
          width = Math.round(width * scale);
          height = Math.round(height * scale);
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject('no-ctx');
            this.stopPhotoCapture();
            return;
          }
          ctx.drawImage(video, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          this.stopPhotoCapture();
          resolve(dataUrl);
        } catch (e) {
          this.stopPhotoCapture();
          reject(e);
        }
      };

      const cancelBtn = document.createElement('button');
      cancelBtn.type = 'button';
      cancelBtn.textContent = 'ยกเลิก';
      cancelBtn.style.cssText = [
        'position:absolute', 'bottom:48px', 'left:24px', 'z-index:100000',
        'padding:12px 18px', 'border:0', 'border-radius:8px',
        'background:#c62828', 'color:#fff', 'font-size:15px',
        'font-family:Kanit,sans-serif'
      ].join(';');
      cancelBtn.onclick = () => {
        this.stopPhotoCapture();
        reject('cancelled');
      };

      overlay.appendChild(video);
      overlay.appendChild(switchBtn);
      overlay.appendChild(galleryBtn);
      overlay.appendChild(shutterBtn);
      overlay.appendChild(cancelBtn);
      document.body.appendChild(overlay);

      this.photoOverlayEl = overlay;
      this.photoVideoEl = video;

      this.openPhotoCamera(this.photoFacingMode).catch((err) => {
        this.stopPhotoCapture();
        reject(err);
      });
    });
  }

  private openPhotoCamera(facingMode: 'environment' | 'user'): Promise<void> {
    const video = this.photoVideoEl;
    if (!video) return Promise.reject('no-video');

    if (this.photoStream) {
      this.photoStream.getTracks().forEach((t) => t.stop());
      this.photoStream = null;
    }

    return navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: { ideal: facingMode },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })
      .then((stream) => {
        this.photoStream = stream;
        video.srcObject = stream;
        return video.play().then(() => undefined).catch(() => undefined);
      })
      .catch((err) => {
        if (facingMode === 'environment') {
          this.photoFacingMode = 'user';
          return navigator.mediaDevices
            .getUserMedia({ audio: false, video: { facingMode: { ideal: 'user' } } })
            .then((stream) => {
              this.photoStream = stream;
              video.srcObject = stream;
              return video.play().then(() => undefined).catch(() => undefined);
            });
        }
        throw err;
      });
  }

  private stopPhotoCapture() {
    if (this.photoStream) {
      this.photoStream.getTracks().forEach((t) => t.stop());
      this.photoStream = null;
    }
    if (this.photoVideoEl) {
      try { this.photoVideoEl.srcObject = null; } catch { }
      this.photoVideoEl = null;
    }
    if (this.photoOverlayEl && this.photoOverlayEl.parentNode) {
      this.photoOverlayEl.parentNode.removeChild(this.photoOverlayEl);
    }
    this.photoOverlayEl = null;
  }

  /** File / gallery picker fallback. */
  private pickPhotoFromGallery(maxSize = 1280, quality = 0.5, preferCamera = false): Promise<string> {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      if (preferCamera) {
        input.setAttribute('capture', 'environment');
      }
      input.style.display = 'none';
      document.body.appendChild(input);

      const cleanup = () => {
        try { document.body.removeChild(input); } catch { }
      };

      input.onchange = () => {
        const file = input.files && input.files[0];
        cleanup();
        if (!file) {
          reject('cancelled');
          return;
        }
        const reader = new FileReader();
        reader.onerror = () => reject('read-failed');
        reader.onload = () => {
          const dataUrl = String(reader.result || '');
          this.resizeDataUrl(dataUrl, maxSize, quality)
            .then(resolve)
            .catch(() => resolve(dataUrl));
        };
        reader.readAsDataURL(file);
      };

      input.click();
    });
  }

  /**
   * Start a web QR scanner overlay. Calls onResult once then stops.
   * Includes a front/back camera switch button for mobile browsers.
   */
  startQrScan(onResult: (text: string) => void, onError?: (err: any) => void): WebQrHandle {
    this.stopQrScan();
    this.qrStopped = false;
    this.qrFacingMode = 'environment';

    const overlay = document.createElement('div');
    overlay.id = 'web-qr-overlay';
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99998',
      'background:#000', 'display:flex', 'flex-direction:column',
      'align-items:center', 'justify-content:center'
    ].join(';');

    const video = document.createElement('video');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('autoplay', 'true');
    video.muted = true;
    // Do not mirror the preview (scaleX(-1)) so QR codes stay readable
    // and the image matches the real camera orientation on mobile.
    video.style.cssText = 'width:100%;height:100%;object-fit:cover;transform:none;';

    const switchBtn = document.createElement('button');
    switchBtn.type = 'button';
    switchBtn.textContent = 'สลับกล้อง';
    switchBtn.style.cssText = [
      'position:absolute', 'top:28px', 'right:16px',
      'z-index:100000', 'padding:10px 16px', 'border:0', 'border-radius:8px',
      'background:rgba(0,0,0,0.65)', 'color:#fff', 'font-size:15px',
      'font-family:Kanit,sans-serif'
    ].join(';');
    switchBtn.onclick = () => {
      this.qrFacingMode = this.qrFacingMode === 'environment' ? 'user' : 'environment';
      this.openQrCamera(this.qrFacingMode, onError);
    };
    this.qrSwitchBtn = switchBtn;

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'ยกเลิก';
    cancelBtn.style.cssText = [
      'position:absolute', 'bottom:28px', 'left:50%', 'transform:translateX(-50%)',
      'z-index:100000', 'padding:12px 28px', 'border:0', 'border-radius:8px',
      'background:#c62828', 'color:#fff', 'font-size:16px', 'font-family:Kanit,sans-serif'
    ].join(';');
    cancelBtn.onclick = () => this.stopQrScan();

    overlay.appendChild(video);
    overlay.appendChild(switchBtn);
    overlay.appendChild(cancelBtn);
    document.body.appendChild(overlay);
    document.documentElement.classList.add('qr-frame');

    this.qrOverlayEl = overlay;
    this.qrVideoEl = video;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const tick = () => {
      if (this.qrStopped) return;
      if (video.readyState === video.HAVE_ENOUGH_DATA && ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        if (canvas.width && canvas.height) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert',
          });
          if (code && code.data) {
            const text = String(code.data).trim();
            this.stopQrScan();
            onResult(text);
            return;
          }
        }
      }
      this.qrRaf = requestAnimationFrame(tick);
    };

    this.openQrCamera(this.qrFacingMode, onError)
      .then(() => {
        if (!this.qrStopped) {
          this.qrRaf = requestAnimationFrame(tick);
        }
      })
      .catch((err) => {
        this.stopQrScan();
        if (onError) {
          onError(err);
        } else {
          alert('ไม่สามารถเปิดกล้องได้ กรุณาอนุญาตสิทธิ์กล้อง หรือเปิดผ่าน HTTPS');
        }
      });

    return { stop: () => this.stopQrScan() };
  }

  private openQrCamera(
    facingMode: 'environment' | 'user',
    onError?: (err: any) => void
  ): Promise<void> {
    const video = this.qrVideoEl;
    if (!video) {
      return Promise.reject('no-video');
    }

    // Stop previous stream before opening the other camera.
    if (this.qrStream) {
      this.qrStream.getTracks().forEach((t) => t.stop());
      this.qrStream = null;
    }

    const constraints: MediaStreamConstraints = {
      audio: false,
      video: {
        facingMode: { ideal: facingMode },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    };

    return navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (this.qrStopped) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        this.qrStream = stream;
        video.srcObject = stream;
        return video.play().then(() => undefined).catch(() => undefined);
      })
      .catch((err) => {
        // If switching fails, try the other camera once more for first open only.
        if (facingMode === 'environment') {
          return navigator.mediaDevices
            .getUserMedia({ audio: false, video: { facingMode: { ideal: 'user' } } })
            .then((stream) => {
              if (this.qrStopped) {
                stream.getTracks().forEach((t) => t.stop());
                return;
              }
              this.qrFacingMode = 'user';
              this.qrStream = stream;
              video.srcObject = stream;
              return video.play().then(() => undefined).catch(() => undefined);
            });
        }
        if (onError) onError(err);
        throw err;
      });
  }

  stopQrScan() {
    this.qrStopped = true;
    if (this.qrRaf) {
      cancelAnimationFrame(this.qrRaf);
      this.qrRaf = 0;
    }
    if (this.qrStream) {
      this.qrStream.getTracks().forEach((t) => t.stop());
      this.qrStream = null;
    }
    if (this.qrVideoEl) {
      try { this.qrVideoEl.srcObject = null; } catch { }
      this.qrVideoEl = null;
    }
    this.qrSwitchBtn = null;
    if (this.qrOverlayEl && this.qrOverlayEl.parentNode) {
      this.qrOverlayEl.parentNode.removeChild(this.qrOverlayEl);
    }
    this.qrOverlayEl = null;
    document.documentElement.classList.remove('qr-frame');
  }

  getCurrentPosition(): Promise<{
    latitude: string;
    longitude: string;
    accuracy: string;
    timestamp: string;
  }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject({ message: 'Geolocation not supported' });
        return;
      }

      const toResult = (pos: GeolocationPosition) => ({
        latitude: String(pos.coords.latitude),
        longitude: String(pos.coords.longitude),
        accuracy: String(pos.coords.accuracy),
        timestamp: String(pos.timestamp),
      });

      // Fast path first: accept a recent cached fix, then fall back to GPS.
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve(toResult(pos)),
        () => {
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve(toResult(pos)),
            (err) => reject(err),
            { enableHighAccuracy: true, timeout: 30000, maximumAge: 60000 }
          );
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 120000 }
      );
    });
  }

  private resizeDataUrl(dataUrl: string, maxSize: number, quality: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        const scale = Math.min(1, maxSize / Math.max(width, height));
        width = Math.round(width * scale);
        height = Math.round(height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject('no-ctx');
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => reject('image-load-failed');
      img.src = dataUrl;
    });
  }
}
