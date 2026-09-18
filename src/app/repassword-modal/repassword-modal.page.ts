import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from "@angular/common/http";
import { UtilService } from '../util.service';


@Component({
  selector: "app-repassword-modal",
  templateUrl: "./repassword-modal.page.html",
  styleUrls: ["./repassword-modal.page.scss"],
})
export class RepasswordModalPage implements OnInit {
  [x: string]: any;
  public repassword: any = '';
  public confirmpassword: any = '';

  constructor(
    private http: HttpClient,
    private utilservice: UtilService,
    private iab: InAppBrowser,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Param ID:', id);
    });

  }



  // openWebView() {
  //   const options: InAppBrowserOptions = {
  //     zoom: 'no'
  //   }
  //   const browser = this.iab.create('https://tms.wicesupplychain.com/resetpassword?user_id=$id');
  // }

  public async SavePassword() {
    let userLogin = await localStorage.getItem("userLogin");
    if (this.repassword !== '' && this.confirmpassword !== '') {
      if (this.repassword == this.confirmpassword) {
        let body = {
          op: this.repassword,
          np: this.confirmpassword,
        };
        this.http
          .post(
            `${this.utilservice.baseURL}api/DriverJob/ChgDriverPwd`,
            JSON.stringify(body),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
              },
            }
          )
          .subscribe(
            async (response) => {
              const alert = await this.alertController.create({
                cssClass: "my-custom-class",
                header: "สำเร็จ",
                subHeader: "เปลี่ยนรหัสผ่านสำเร็จ",
                buttons: [{
                  text: 'ตกลง',
                  handler: () => {
                    this.modalCtrl.dismiss();
                  }
                }],
              });
              await alert.present();
            },
            async (error) => {
              const alert = await this.alertController.create({
                cssClass: "my-custom-class",
                header: "พบข้อผิดพลาด",
                subHeader: "ไม่สามารถเปลี่ยนรหัสผ่านได้",
                message: "กรุณาลองใหม่อีกครั้ง",
                buttons: ["ตกลง"],
              });
              await alert.present();
            }
          );
      } else {
        const alert = await this.alertController.create({
          cssClass: "my-custom-class",
          header: "พบข้อผิดพลาด",
          subHeader: "รหัสผ่านไม่ตรงกัน",
          buttons: ["ตกลง"],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "พบข้อผิดพลาด",
        subHeader: "กรุณากรอกข้อมูลให้ถูกต้อง",
        buttons: ["ตกลง"],
      });
      await alert.present();


      //   if (this.repassword == this.confirmpassword) {
      //     console.log(this.repassword, this.confirmpassword)
      //     const alert = await this.alertController.create({
      //       cssClass: "my-custom-class",
      //       header: "สำเร็จ",
      //       subHeader: "เปลี่ยนรหัสผ่านสำเร็จ",
      //       buttons: [{
      //         text: 'ตกลง',
      //         handler: () => {
      //           this.modalCtrl.dismiss();
      //         }
      //       }],
      //     });
      //     await alert.present();
      //   } else {
      //     const alert = await this.alertController.create({
      //       cssClass: "my-custom-class",
      //       header: "พบข้อผิดพลาด",
      //       subHeader: "รหัสผ่านไม่ตรงกัน",
      //       buttons: ["ตกลง"],
      //     });
      //     await alert.present();
      //   }
      // } else {
      //   const alert = await this.alertController.create({
      //     cssClass: "my-custom-class",
      //     header: "พบข้อผิดพลาด",
      //     subHeader: "กรุณากรอกข้อมูลให้ถูกต้อง",
      //     buttons: ["ตกลง"],
      //   });
      //   await alert.present();
    }

  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  public Home() {
    this.router.navigate(['/home']);
  }


}
