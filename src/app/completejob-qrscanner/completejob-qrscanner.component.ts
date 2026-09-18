import { NavController } from '@ionic/angular';
import { Router } from "@angular/router";
import { UtilService } from "./../util.service";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-completejob-qrscanner",
  templateUrl: "./completejob-qrscanner.component.html",
  styleUrls: ["./completejob-qrscanner.component.scss"],
})
export class CompletejobQrscannerComponent implements OnInit, OnDestroy {
  scanSubscription;
  constructor(
    public qrScanner: QRScanner,
    public utiservice: UtilService,
    private router: Router,
    public navController : NavController,
  ) {}

  ngOnInit() {
    (window.document.querySelector("ion-app") as HTMLElement).classList.add(
      "cameraView"
    );
    
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // Make background transparent and show camera
          this.qrScanner.show();
          
          // Start scanning
          this.scanSubscription = this.qrScanner
            .scan()
            .subscribe((text: string) => {
              console.log('QR Scanned:', text);
              
              // Hide camera and navigate
              this.qrScanner.hide();
              this.router.navigate([
                "/deliver",
                { text: text },
              ]);
              
              // Cleanup
              this.qrScanner.destroy();
              this.scanSubscription.unsubscribe();
            });
        } else if (status.denied) {
          // Permission denied permanently
          alert('กรุณาเปิดสิทธิ์กล้องในการตั้งค่า');
          this.qrScanner.destroy();
          this.navController.back();
        } else {
          // Permission denied (not permanently)
          alert('ไม่สามารถเข้าถึงกล้องได้');
          this.qrScanner.destroy();
          this.navController.back();
        }
      })
      .catch((e: any) => {
        console.error('QR Scanner Error:', e);
        alert('เกิดข้อผิดพลาดในการเปิดกล้อง: ' + e);
        this.qrScanner.destroy();
        this.navController.back();
      });
  }

  ngOnDestroy() {
    console.log("Destroying Complete Job QR Scanner");
    if (this.scanSubscription) {
      this.scanSubscription.unsubscribe();
    }
    this.qrScanner.hide();
    this.qrScanner.destroy();
    (window.document.querySelector("ion-app") as HTMLElement).classList.remove(
      "cameraView"
    );
  }
}
