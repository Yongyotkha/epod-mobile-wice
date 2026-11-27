import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

type CameraStatus = 'granted' | 'denied' | 'unknown';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
  ) {}

  // Check camera permission status when possible. Some webviews don't
  // expose a programmatic status; in that case return 'unknown'.
  async checkCameraStatus(): Promise<CameraStatus> {
    // On Android, ask the AndroidPermissions plugin for current camera permission.
    try {
      if (!this.platform.is('hybrid') && !this.platform.is('cordova') && !this.platform.is('capacitor')) {
        return 'unknown';
      }
      if (this.platform.is('android')) {
        const permission = this.androidPermissions.PERMISSION.CAMERA;
        const result = await this.androidPermissions.checkPermission(permission);
        return result.hasPermission ? 'granted' : 'denied';
      }

      // On iOS (WKWebView) the Permissions API is unreliable; return 'unknown'
      // and let QRScanner.prepare() handle the real native permission flow.
      return 'unknown';
    } catch (e) {
      return 'unknown';
    }
  }

  // Request camera permission. Sequence recommendation for callers:
  // prepare -> checkCameraStatus/authorized -> show (UI) -> scan
  async requestCameraPermission(): Promise<boolean> {
    try {
      if (!this.platform.is('hybrid') && !this.platform.is('cordova') && !this.platform.is('capacitor')) {
        // Browser will prompt when getUserMedia / file capture is used.
        return true;
      }
      if (this.platform.is('android')) {
        const permission = this.androidPermissions.PERMISSION.CAMERA;
        const result = await this.androidPermissions.checkPermission(permission);
        if (result.hasPermission) return true;
        const request = await this.androidPermissions.requestPermission(permission);
        return request.hasPermission === true;
      }

      // For iOS / WKWebView do NOT use navigator.permissions or getUserMedia.
      // Those are unreliable for native plugins. Instead, use the QRScanner
      // plugin's `prepare()` method from the scanning component, which will
      // perform the correct native permission flow. Here we return true so
      // callers on iOS can proceed to call QRScanner.prepare() themselves.
      return true;
    } catch (e) {
      console.warn('requestCameraPermission error', e);
      return false;
    }
  }

  // Convenience: prepare camera for scanning. Call this before showing scanner UI.
  // Returns true if permission is granted or prompt succeeded.
  async prepareCameraForScan(): Promise<boolean> {
    const status = await this.checkCameraStatus();
    if (this.platform.is('android')) {
      if (status === 'granted') return true;
      return this.requestCameraPermission();
    }

    // On iOS: do NOT try to programmatically request via web APIs here.
    // The scanning component should call `QRScanner.prepare()` which will
    // handle the native permission prompt and camera lifecycle.
    return true;
  }
}
