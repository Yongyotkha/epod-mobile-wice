import { OrderModelPage } from "./../order-model/order-model.page";
import { HttpClient } from "@angular/common/http";
import { UtilService } from "./../util.service";
import { AuthService } from "./../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import {
  NavController,
  AlertController,
  LoadingController,
  Events,
  ModalController,
  Platform,
} from "@ionic/angular";
import { RemarkModalPage } from "../remark-modal/remark-modal.page";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";

@Component({
  selector: "app-getjob",
  templateUrl: "./getjob.page.html",
  styleUrls: ["./getjob.page.scss"],
})
export class GetjobPage implements OnInit, OnDestroy {
  public textgetjob: any;
  public openqrscan: any;
  public countdrop: any = '0';
  public countorder: any = '0';

  constructor(
    private camera: Camera,
    public alertContrl: AlertController,
    public navController: NavController,
    private modalCtrl: ModalController,
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public utilservice: UtilService,
    public http: HttpClient,
    private router: Router,
    public platform: Platform,
    public qr: QRScanner,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.utilservice.requestGPSPermission();
    console.log(this.utilservice.locationData);
    let userLogin = await localStorage.getItem("userLogin");
    // this.platform.backButton.subscribeWithPriority(0, () => {
    //   document.getElementsByTagName("body")[0].style.opacity = "1";
    //   this.openqrscan.unsubscribe();
    //   console.log("test");
    // });
    this.route.paramMap.subscribe(async (val) => {
      if (val.get("text")) {
        const loading = await this.loadingController.create({
          cssClass: "my-custom-class",
          message: "กำลังโหลดข้อมูลพัสดุ...",
        });
        await loading.present();
        let body = {
          shipmentIds: [],
        };
        // trim whitespace ที่ iOS QR scanner อาจแนบมา
        body.shipmentIds = val.get("text").split(",").map(s => s.trim()).filter(s => s.length > 0);
        this.http
          .post(
            `${this.utilservice.baseURL}api/DriverJob/GetJobsInfo`,
            JSON.stringify(body),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(userLogin)["access_token"],
              },
            }
          )
          .toPromise()
          .then(async (val: Array<any>) => {
            if (!val || val.length == undefined || val.length == 0) {
              const alert = await this.alertContrl.create({
                cssClass: "my-custom-class",
                message: `ไม่พบข้อมูลพัสดุ`,
                buttons: ["ตกลง"],
              });
              await alert.present();
              return;
            }
            if (val[0].shipmentId_dulicate) {
              const confirm = await this.alertContrl.create({
                header: "แจ้งเตือน",
                message: `${val[0].message}`,
                buttons: [
                  {
                    text: "ยกเลิก",
                    role: "cancel",
                    handler: () => { },
                  },
                  {
                    text: "ยืนยัน",
                    handler: async () => {
                      for (const element of val) {
                        if (
                          this.utilservice.jobList.filter((e) => {
                            return e.invoiceNumber == element.invoiceNumber;
                          }).length > 0
                        ) {
                          const alert = await this.alertContrl.create({
                            cssClass: "my-custom-class",
                            header: "สแกนซ้ำ",
                            message: `พัสดุ #${element.invoiceNumber} สแกนแล้ว`,
                            buttons: ["ตกลง"],
                          });
                          await alert.present();
                        } else {
                          if (
                            this.utilservice.getjoblist.filter((e) => {
                              return e.invoiceNumber == element.invoiceNumber;
                            }).length <= 0
                          ) {
                            this.utilservice.getjoblist.push(element);
                          }
                        }
                      }
                    },
                  },
                ],
              });
              console.log('3')
              await confirm.present();
            } else {
              for (const element of val) {
                if (
                  this.utilservice.jobList.filter((e) => {
                    return e.invoiceNumber == element.invoiceNumber;
                  }).length > 0
                ) {
                  const alert = await this.alertContrl.create({
                    cssClass: "my-custom-class",
                    header: "สแกนซ้ำ",
                    message: `พัสดุ #${element.invoiceNumber} สแกนแล้ว`,
                    buttons: ["ตกลง"],
                  });
                  await alert.present();
                } else {
                  if (
                    this.utilservice.getjoblist.filter((e) => {
                      return e.invoiceNumber == element.invoiceNumber;
                    }).length <= 0
                  ) {
                    this.utilservice.getjoblist.push(element);
                  }
                }
              }
            }
            console.log('getjoblist after push:', this.utilservice.getjoblist);
            // reassign เพื่อ trigger Angular change detection ให้ view อัปเดตทันที
            this.utilservice.getjoblist = [...this.utilservice.getjoblist];
          })
          .catch(async (err) => {
            console.error('[GetJobsInfo] error:', err);
            const alert = await this.alertContrl.create({
              cssClass: "my-custom-class",
              header: "ผิดพลาด",
              message: `ไม่สามารถโหลดข้อมูลพัสดุได้ กรุณาลองใหม่อีกครั้ง`,
              buttons: ["ตกลง"],
            });
            await alert.present();
          })
          .finally(() => {
            loading.dismiss();
          });
        console.log(this.utilservice.getjoblist)
      }
    });
  }


  ngOnDestroy() { }

  public onGetinfobytext = async () => {
    let userLogin = await localStorage.getItem("userLogin");
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "กำลังโหลดข้อมูลพัสดุ...",
    });
    await loading.present();
    let body = {
      shipmentIds: [this.textgetjob],
      lat: `${this.utilservice.locationData.latitude}`,
      lng: `${this.utilservice.locationData.longitude}`,
    };
    console.log(body)
    this.http
      .post(`${this.utilservice.baseURL}api/DriverJob/GetJobsInfo`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
        },
      })
      .toPromise()
      .then(async (val: Array<any>) => {
        console.log(val);
        if (val.length == undefined) {
          const alert = await this.alertContrl.create({
            cssClass: "my-custom-class",
            message: `ไม่พบข้อมูลพัสดุ`,
            buttons: ["ตกลง"],
          });
          await alert.present();
        } else if (val.length == 0) {
          const alert = await this.alertContrl.create({
            cssClass: "my-custom-class",
            message: `ไม่พบข้อมูลพัสดุ`,
            buttons: ["ตกลง"],
          });
          await alert.present();
        }
        if (val[0].shipmentId_dulicate) {
          const confirm = await this.alertContrl.create({
            header: "แจ้งเตือน",
            message: `${val[0].message}`,
            buttons: [
              {
                text: "ยกเลิก",
                role: "cancel",
                handler: () => { },
              },
              {
                text: "ยืนยัน",
                handler: async () => {
                  await val.forEach(async (element) => {
                    if (
                      this.utilservice.jobList.filter((e) => {
                        return e.invoiceNumber == element.invoiceNumber;
                      }).length > 0
                    ) {
                      const alert = await this.alertContrl.create({
                        cssClass: "my-custom-class",
                        header: "สแกนซ้ำ",
                        message: `พัสดุ #${element.invoiceNumber} สแกนแล้ว`,
                        buttons: ["ตกลง"],
                      });

                      await alert.present();
                    } else {
                      if (
                        this.utilservice.getjoblist.filter((e) => {
                          return e.invoiceNumber == element.invoiceNumber;
                        }).length <= 0
                      ) {
                        this.utilservice.getjoblist.push(element);
                      } else {
                        const alert = await this.alertContrl.create({
                          cssClass: "my-custom-class",
                          header: "สแกนซ้ำ",
                          message: `พัสดุ #${element.invoiceNumber} สแกนแล้ว`,
                          buttons: ["ตกลง"],
                        });
                        await alert.present();
                      }
                    }
                  });
                },
              },
            ],
          });
          await confirm.present();
        } else {
          val.forEach(async (element) => {
            if (
              this.utilservice.jobList.filter((e) => {
                return e.invoiceNumber == element.invoiceNumber;
              }).length > 0
            ) {
              const alert = await this.alertContrl.create({
                cssClass: "my-custom-class",
                header: "สแกนซ้ำ",
                message: `พัสดุ #${element.invoiceNumber} สแกนแล้ว`,
                buttons: ["ตกลง"],
              });

              await alert.present();
            } else {
              if (
                this.utilservice.getjoblist.filter((e) => {
                  return e.invoiceNumber == element.invoiceNumber;
                }).length <= 0
              ) {
                this.utilservice.getjoblist.push(element);
              } else {
                const alert = await this.alertContrl.create({
                  cssClass: "my-custom-class",
                  header: "สแกนซ้ำ",
                  message: `พัสดุ #${element.invoiceNumber} สแกนแล้ว`,
                  buttons: ["ตกลง"],
                });
                await alert.present();
              }
            }
          });
        }
      })
      .finally(() => {
        this.router.navigate(["/getjob"]);
        loading.dismiss();
      });
    this.textgetjob = "";
    console.log(this.utilservice.getjoblist)

  };

  async delete_item(dataIndex) {
    return new Promise(async (resolve) => {
      const confirm = await this.alertContrl.create({
        header: "ยืนยันการลบ",
        message: "คุณต้องการลบหรือไม่",
        backdropDismiss: false,
        buttons: [
          {
            text: "ยกเลิก",
            role: "cancel",
            handler: () => {
              return resolve(false);
            },
          },
          {
            text: "ตกลง",
            handler: () => {
              this.utilservice.getjoblist.splice(
                dataIndex,
                1
              );
              console.log(this.utilservice.getjoblist)
            },
          },
        ],
      });
      await confirm.present();
    });
  }

  async submit_deliver() {
    let userLogin = await localStorage.getItem("userLogin");
    return new Promise(async (resolve) => {
      const confirm = await this.alertContrl.create({
        header: "ยืนยันการรับงาน",
        message: "กดเพื่อยืนยันการรับงาน",
        backdropDismiss: false,
        buttons: [
          {
            text: "ยกเลิก",
            role: "cancel",
            handler: () => {
              return resolve(false);
            },
          },
          {
            text: "ตกลง",
            handler: async () => {
              const loading = await this.loadingController.create({
                cssClass: "my-custom-class",
                message: "กำลังยืนยันการรับงาน...",
              });
              await loading.present();
              // this.utilservice.requestGPSPermission();
              let body = {
                shipmentIds: [],
                lat: `${this.utilservice.locationData.latitude}`,
                lng: `${this.utilservice.locationData.longitude}`,
              };

              this.utilservice.getjoblist.forEach((el: any) => {
                body.shipmentIds.push(el.shipmentId);
              });
              if (body.shipmentIds.length == 0) {
                await loading.dismiss();
                const alert = await this.alertContrl.create({
                  cssClass: "my-custom-class",
                  header: "ผิดพลาด",
                  message: `กรุณาสแกนหรือกรอกข้อมูล`,
                  buttons: ["ตกลง"],
                });
                await alert.present();
              } else {
                console.log(JSON.stringify(body));
                this.http
                  .post(
                    `${this.utilservice.baseURL}api/DriverJob/SaveDriverJobs`,
                    JSON.stringify(body),
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization:
                          "Bearer " + JSON.parse(userLogin)["access_token"],
                      },
                    }
                  )
                  .toPromise()
                  .then(async (val) => {
                    let datagetjob: any = {};
                    datagetjob = val;
                    console.log(datagetjob);
                    if (datagetjob.success) {
                      const alert = await this.alertContrl.create({
                        cssClass: "my-custom-class",
                        header: "สำเร็จ",
                        backdropDismiss: false,
                        message: `${datagetjob.message}`,
                        buttons: [{
                          text: 'ตกลง', handler: () => {
                            // this.navController.navigateForward("/getjob");
                            this.router.navigate(["/deliver-history"]);
                            datagetjob = {};
                            this.utilservice.getjoblist = [];
                            this.downloadMyJob();

                          }
                        }],

                      });
                      await alert.present();
                    }
                  })
                  .finally(async () => {
                    await loading.dismiss();
                    this.utilservice.getjoblist = [];
                    this.downloadMyJob();
                  });
              }
            },
          },
        ],
      });
      await confirm.present();
    });
  }

  openModal(index) {
    this.modalCtrl
      .create({
        component: RemarkModalPage,
        componentProps: {
          remark: this.utilservice.getjoblist[index].remark,
        },
      })
      .then((modal) => modal.present());
  }

  openOrderModel(index) {
    this.modalCtrl
      .create({
        component: OrderModelPage,
        componentProps: {
          orders: this.utilservice.getjoblist[index].orders,
        },
      })
      .then((modal) => modal.present());
  }



  Deliver() {
    // this.navController.navigateForward("/deliver");
    this.router.navigate(["/deliver"]);
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
        // const loading = await this.loadingCtrl.create({
        //   cssClass: "my-custom-class",
        //   message: "กำลังโหลดงานของฉัน...",
        // });
        // await loading.present();
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
        console.log('[Getjob] TokenValidate failed, attempting re-login...', reason);
        await this.authService.handleTokenError();
      });
  };

}
