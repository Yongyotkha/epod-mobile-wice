import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { RemarkModalPage } from "./../remark-modal/remark-modal.page";
import { OrderModelPage } from "./../order-model/order-model.page";
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./../util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NavController,
  AlertController,
  ModalController,
  LoadingController,
  IonContent,
} from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { DeliverModalPage } from "../deliver-modal/deliver-modal.page";
import { AuthService } from "./../services/auth.service";

@Component({
  selector: "app-deliver-history",
  templateUrl: "./deliver-history.page.html",
  styleUrls: ["./deliver-history.page.scss"],
})
export class DeliverHistoryPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  public shownGroup = null;
  public countdrop: any;
  public countorder: number = 0;
  public dropnumber: Array<any> = [];
  public datas: Array<any> = [];
  public countorderselect: number = 0;
  public disablesend: boolean = true;
  public selectDrop: any;
  constructor(
    public alertContrl: AlertController,
    public navController: NavController,
    private modalCtrl: ModalController,
    private camera: Camera,
    public utilservice: UtilService,
    public http: HttpClient,
    public loadingcontroll: LoadingController,
    private router: Router,
    public activatedroute: ActivatedRoute,
    private authService: AuthService,
  ) {
    activatedroute.params.subscribe(async (val) => {
      await this.downloadMyJob();
      this.dropnumber = [];
      this.datas = [];
      this.countdrop = this.utilservice.jobList.length;
      this.shownGroup = true;
      this.disablesend = true;
    });
  }

  async ngOnInit() {
    await this.downloadMyJob();
    this.dropnumber = [];
    this.datas = [];
    this.countdrop = this.utilservice.jobList.length;
    this.shownGroup = true;
    this.disablesend = true;
    // document.getElementById("chickrefresh").click();
    this.utilservice.servicedropcount = this.countdrop
    this.utilservice.serviceordercount = this.countorder
    
    // Force enable scrolling
    setTimeout(() => {
      if (this.content) {
        this.content.scrollY = true;
      }
    }, 100);
  }

  Home() {
    this.router.navigate(["/home"]);

    // this.navController.navigateForward("/home");
  }
  Deliver() {
    this.router.navigate(["/deliver"]);
    // this.navController.navigateForward("/deliver");
  }

  toggleGroup(group) {
    this.selectDrop = group
    this.countorderselect = 0;
    this.datas = [];
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
      let countnotcheckbox = 0
      this.datas.push(this.utilservice.jobList[group].orders);
      for (let i = 0; i < this.utilservice.jobList[group].orders.length; i++) {
        if (
          !this.utilservice.jobList[group].orders[i].shipping_status_deliver && this.utilservice.jobList[group].orders[i].shipping_status_waiting
        ) {
          this.countorderselect = this.countorderselect + 1;
        }
      }
      if (this.countorderselect == 0) {
        this.disablesend = false
      } else {
        this.disablesend = true
      }
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }
  public showJoblist = () => {
    this.countorderselect = 0;
    this.countorder = 0;
    for (let i = 0; i < this.utilservice.jobList.length; i++) {
      this.dropnumber[i] = {
        drop_number: `${this.utilservice.jobList[i].drop_number}`,
        order_count: `${this.utilservice.jobList[i].order_count}`,
        shipping_status_deliver: `${this.utilservice.jobList[i].shipping_status_deliver}`,
      };
      this.countorder = this.countorder + this.dropnumber[i].order_count * 1;
    }
    this.utilservice.servicedropcount = this.countdrop
    this.utilservice.serviceordercount = this.countorder
  };

  openModal(i, idx) {
    this.modalCtrl
      .create({
        component: RemarkModalPage,
        componentProps: {
          remark: this.utilservice.jobList[i].orders[idx],
        },
      })
      .then((modal) => modal.present());
  }

  openOrderModel(index) {
    this.modalCtrl
      .create({
        component: OrderModelPage,
        componentProps: {
          order: this.utilservice.jobList[index].orders,
        },
      })
      .then((modal) => modal.present());
  }

  deliverModal(index) {
    this.modalCtrl
      .create({
        component: DeliverModalPage,
        componentProps: {
          orders: this.utilservice.jobList[index].orders,
        },
      })
      .then((modal) => modal.present());
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
        const loading = await this.loadingcontroll.create({
          cssClass: "my-custom-class",
          message: "กำลังโหลดงานของฉัน...",
        });
        await loading.present();
        await this.utilservice.delay(1000);
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
            if (val) {
              this.utilservice.jobList = val;
              for (let i = 0; i < this.utilservice.jobList.length; i++) {

                let countorder = 0;
                for (
                  let j = 0;
                  j < this.utilservice.jobList[i].orders.length;
                  j++
                ) {
                  this.utilservice.jobList[i].orders[j].shipping_status_waiting = false;
                  if (
                    this.utilservice.completejobList.filter((e) => {
                      return (
                        e.order_id ==
                        this.utilservice.jobList[i].orders[j].order_id
                      );
                    }).length > 0
                  ) {
                    this.utilservice.jobList[i].orders[
                      j
                    ].shipping_status_deliver = true;
                    countorder++;
                  } else {
                    this.utilservice.jobList[i].orders[
                      j
                    ].shipping_status_deliver = false;
                  }
                }
                if (countorder == this.utilservice.jobList[i].orders.length) {
                  this.utilservice.jobList[i].shipping_status_deliver = true;
                } else {
                  this.utilservice.jobList[i].shipping_status_deliver = false;
                }
              }
              this.countdrop = this.utilservice.jobList.length;
              this.showJoblist();
              document.getElementById("chickrefresh").click();
            }
          })
          .catch((reason: any) => {
            this.utilservice.jobList = [];
          })
          .finally(() => {
            loading.dismiss();
          });
      })
      .catch(async (reason: any) => {
        console.log('[DeliverHistory] TokenValidate failed, attempting re-login...', reason);
        await this.authService.handleTokenError();
      });

  };

  public checkSenddata = async (i) => {
    let countrow = 0;
    for (let x = 0; x < this.utilservice.jobList[i].orders.length; x++) {
      if (this.utilservice.jobList[i].orders[x].shipping_status_waiting) {
        if (this.utilservice.completejobList.length === 0) {
          this.utilservice.jobList[i].orders[x].shipping_status_deliver = true;
          this.utilservice.jobList[i].orders[x].shipping_status_code = "00";
          this.utilservice.completejobList.push(
            this.utilservice.jobList[i].orders[x]
          );
        } else {
          if (
            this.utilservice.completejobList.filter((e) => {
              return (
                e.order_id == this.utilservice.jobList[i].orders[x].order_id
              );
            }).length > 0
          ) {
            console.log("ซ่ำ");
          } else {
            this.utilservice.jobList[i].orders[x].shipping_status_deliver =
              true;
            this.utilservice.jobList[i].orders[x].shipping_status_code = "00";
            this.utilservice.completejobList.push(
              this.utilservice.jobList[i].orders[x]
            );
          }
        }
        countrow++;
      } else {
        if (
          this.utilservice.completejobList.filter((e) => {
            return e.order_id == this.utilservice.jobList[i].orders[x].order_id;
          }).length > 0
        ) {
          this.utilservice.completejobList =
            this.utilservice.completejobList.filter((e) => {
              return (
                e.order_id != this.utilservice.jobList[i].orders[x].order_id
              );
            });
        }
      }
    }
    if (this.countorderselect === 0) {
      const alert = await this.alertContrl.create({
        cssClass: "my-custom-class",
        header: "แจ้งเตือน",
        message: `กรุณาเลือก Order อย่างน้อย 1 รายการ`,
        buttons: ["ตกลง"],
      });
      await alert.present();
    } else {
      countrow = 0;
      this.Deliver()
    }
  };

  public changeCheckbox = async (i, idx, event) => {
    this.datas[0][idx].shipping_status_waiting = event.target.checked;
    if (event.target.checked) {
      this.countorderselect = this.countorderselect + 1;

    } else {
      this.countorderselect = this.countorderselect - 1;
    }
    if (this.countorderselect == 0) {
      this.disablesend = false
    } else {
      this.disablesend = true
    }
  };

  public toggleAllCheckboxes(event) {
    const isChecked = event.target.checked;
    this.datas[0].forEach((order, idx) => {
      order.shipping_status_waiting = isChecked;
    });
    this.countorderselect = isChecked ? this.datas[0].length : 0;
    this.disablesend = this.countorderselect === 0;
  }

  public async sendData() {
    let countrow = 0;
    for (let x = 0; x < this.utilservice.jobList[this.selectDrop].orders.length; x++) {
      if (this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_waiting) {
        if (this.utilservice.completejobList.length === 0) {
          this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_deliver = true;
          this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_code = "00";
          this.utilservice.completejobList.push(
            this.utilservice.jobList[this.selectDrop].orders[x]
          );
        } else {
          if (
            this.utilservice.completejobList.filter((e) => {
              return (
                e.order_id == this.utilservice.jobList[this.selectDrop].orders[x].order_id
              );
            }).length > 0
          ) {
            console.log("ซ่ำ");
          } else {
            this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_deliver =
              true;
            this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_code = "00";
            this.utilservice.completejobList.push(
              this.utilservice.jobList[this.selectDrop].orders[x]
            );
          }
        }
        countrow++;
      } else {
        if (
          this.utilservice.completejobList.filter((e) => {
            return e.order_id == this.utilservice.jobList[this.selectDrop].orders[x].order_id;
          }).length > 0
        ) {
          this.utilservice.completejobList =
            this.utilservice.completejobList.filter((e) => {
              return (
                e.order_id != this.utilservice.jobList[this.selectDrop].orders[x].order_id
              );
            });
        }
      }
    }
    if (this.countorderselect === 0) {
      const alert = await this.alertContrl.create({
        cssClass: "my-custom-class",
        header: "แจ้งเตือน",
        message: `กรุณาเลือก Order อย่างน้อย 1 รายการ`,
        buttons: ["ตกลง"],
      });
      await alert.present();
    } else {
      countrow = 0;
      this.router.navigate(["/deliver"]);
    }
  }

}

