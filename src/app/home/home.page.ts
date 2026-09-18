import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './../util.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, Events, NavController, AlertController, LoadingController } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public navController : NavController,
    public utilservice:UtilService,
    public http:HttpClient,
    public alertController:AlertController,
    public loadingController:LoadingController,
    private router: Router,
    private authService: AuthService,
    ) {
    library.add(fas, fab, far);
   }

  async ngOnInit() {
    if(localStorage.getItem('userLogin') == null){
        localStorage.clear();
        this.navController.navigateRoot("/login");
    }else{
      await this.downloadMyJob();
      // document.getElementById("downmyjob").click()
      await this.syncDriverInfo();
      await this.utilservice.requestGPSPermission();

    }
    }

  Getjob() {
    this.router.navigate(["/getjob"]);
  }
  Deliver() {
    this.router.navigate(["/deliver"]);
  }
  DeliverFinish() {
    this.router.navigate(["/deliver-history"]);
  }

  public syncDriverInfo = async () => {
    let userLogin = await localStorage.getItem("userLogin");
    console.log(JSON.parse(userLogin)["access_token"]);
    this.http
      .get(`${this.utilservice.baseURL}api/DriverJob/GetDriverInfo`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
        },
      })
      .toPromise()
      .then(async (val: any) => {
        if (val.success) {
          this.utilservice.driverInfo = val;
          console.log(this.utilservice.driverInfo);
        }else{
          this.utilservice.driverInfo = val;
          console.log(this.utilservice.driverInfo);
          const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
            subHeader: val.message,
            buttons: ["ตกลง"],
          });
          await alert.present();
          await localStorage.clear();
          await this.navController.navigateRoot("/login");
        }
      });
  };

  public downloadMyJob = async () => {
    console.log('downloadmyjob')
    let userLogin = await localStorage.getItem("userLogin");
    this.http.get(`${this.utilservice.baseURL}api/TokenValidate`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse( userLogin)["access_token"]}`,
      },
    })
    .toPromise().then(async (val)=>{
      const loading = await this.loadingController.create({
        cssClass: "my-custom-class",
        message: "กำลังโหลดงานของฉัน...",
      });
      await loading.present();
      await this.utilservice.delay(1000);
      this.http
      .get(`${this.utilservice.baseURL}api/DriverJob/GetDriverJobs`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + JSON.parse(userLogin)["access_token"] ,
        },
      })
      .toPromise()
      .then((val: any) => {
        this.utilservice.jobList = [];
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
          this.utilservice.serviceordercount = 0;
        }
      })
      .catch((reason: any) => {
        this.utilservice.jobList = [];
      })
      .finally(() => {
        loading.dismiss();
      });
    }).catch(async (reason: any) => {
      console.log('[Home] TokenValidate failed, attempting re-login...', reason);
      await this.authService.handleTokenError();
    });
  };

  public doRefresh = async (event: any) => {
    await this.downloadMyJob();
    event.target.complete();
  };
}