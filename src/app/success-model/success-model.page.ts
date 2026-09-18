import { HttpClient } from '@angular/common/http';
import { UtilService } from './../util.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { ModalController, NavParams } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-model",
  templateUrl: "./success-model.page.html",
  styleUrls: ["./success-model.page.scss"],
})
export class SuccessModelPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public router: Router,
    public utilservice:UtilService,
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.downloadMyJob();
  }


  
  public downloadMyJob = async () => {
    let userLogin = await localStorage.getItem("userLogin");
    this.http
      .get(`${this.utilservice.baseURL}api/TokenValidate`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(userLogin)["access_token"]}`,
        },
      })
      .toPromise()
      .then(async (val) => {
        // const loading = await this.loadingController.create({
        //   cssClass: "my-custom-class",
        //   message: "กำลังโหลดงานของฉัน...",
        // });
        // await loading.present();
        // await this.utilservice.delay(1000);
        this.http
          .get(`${this.utilservice.baseURL}api/DriverJob/GetDriverJobs`, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
            },
          })
          .toPromise()
          .then((val: any) => {
            this.utilservice.jobList = [];
            console.log(val)
     
            if (val) {
              this.utilservice.servicedropcount = 0;
              this.utilservice.serviceordercount= 0;
              this.utilservice.jobList = val;
              console.log(val)
              this.utilservice.servicedropcount = this.utilservice.jobList.length
              for(let i = 0 ; i< this.utilservice.jobList.length;i++){
                for(let j = 0;j<this.utilservice.jobList[i].orders.length;j++){
                  this.utilservice.serviceordercount = this.utilservice.serviceordercount + 1;
                }
              }
            }else{
              this.utilservice.servicedropcount = 0;
              this.utilservice.serviceordercount= 0;
            }
          })
          .catch((reason: any) => {
            this.utilservice.jobList = [];
          })
          .finally(() => {
            // loading.dismiss();
          });
      })
      .catch(async (reason: any) => {
        console.log('[SuccessModel] TokenValidate failed, attempting re-login...', reason);
        await this.authService.handleTokenError();
      });
  };

  async dismissModal() {
   await this.downloadMyJob();
    this.modalCtrl.dismiss();
    this.router.navigate(["/home"]);
  }
}
