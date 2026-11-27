import { Router } from '@angular/router';
import { UtilService } from './../util.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebBridgeService } from '../services/web-bridge.service';

@Component({
  selector: 'app-getjob-qrscanner',
  templateUrl: './getjob-qrscanner.component.html',
  styleUrls: ['./getjob-qrscanner.component.scss'],
})
export class GetjobQrscannerComponent implements OnInit, OnDestroy {
  scanSubscription: any;
  constructor(
    public qrScanner: QRScanner,
    public utiservice: UtilService,
    private router: Router,
    private webBridge: WebBridgeService,
  ) { }

  private startScannerUI() {
    document.body.classList.add('scanner-active');
    document.body.classList.add('qr-scanning');
    document.documentElement.classList.add('qr-frame');
  }

  private stopScannerUI() {
    document.body.classList.remove('scanner-active');
    document.body.classList.remove('qr-scanning');
    document.documentElement.classList.remove('qr-frame');
  }

  private cleanupNative() {
    if (this.scanSubscription) {
      this.scanSubscription.unsubscribe();
      this.scanSubscription = null;
    }
    try { this.qrScanner.hide(); } catch (err) {}
    try { this.qrScanner.destroy(); } catch (err) {}
  }

  ngOnInit() {
    if (!this.webBridge.isNative()) {
      this.startScannerUI();
      this.webBridge.startQrScan(
        (text: string) => {
          console.log('QR Scanned:', text);
          this.stopScannerUI();
          this.router.navigate(['/getjob', { text: text }]);
        },
        (e) => {
          console.error('QR Scanner Error:', e);
          alert('เกิดข้อผิดพลาดในการเปิดกล้อง: ' + e);
          this.stopScannerUI();
          this.router.navigate(['/getjob']);
        }
      );
      return;
    }

    // Request camera permission first
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.startScannerUI();
          this.qrScanner.show();

          // Start scanning
          this.scanSubscription = this.qrScanner
            .scan()
            .subscribe((text: string) => {
              console.log('QR Scanned:', text);

              // 1) stop listening first
              if (this.scanSubscription) {
                this.scanSubscription.unsubscribe();
                this.scanSubscription = null;
              }

              // 2) close camera
              try { this.qrScanner.hide(); } catch (err) {}
              try { this.qrScanner.destroy(); } catch (err) {}

              // 3) restore UI
              this.stopScannerUI();

              // 4) navigate
              this.router.navigate(['/getjob', { text: text }]);
            });
        } else if (status.denied) {
          // Permission denied permanently
          alert('กรุณาเปิดสิทธิ์กล้องในการตั้งค่า');
          this.qrScanner.destroy();
          this.stopScannerUI();
          this.router.navigate(['/getjob']);
        } else {
          // Permission denied (not permanently)
          alert('ไม่สามารถเข้าถึงกล้องได้');
          this.qrScanner.destroy();
          this.stopScannerUI();
          this.router.navigate(['/getjob']);
        }
      })
      .catch((e: any) => {
        console.error('QR Scanner Error:', e);
        alert('เกิดข้อผิดพลาดในการเปิดกล้อง: ' + e);

        this.cleanupNative();
        this.stopScannerUI();
        this.router.navigate(['/getjob']);
      });
  }

  ngOnDestroy() {
    console.log('Destroying QR Scanner');
    this.webBridge.stopQrScan();
    this.cleanupNative();
    this.stopScannerUI();
  }

}
