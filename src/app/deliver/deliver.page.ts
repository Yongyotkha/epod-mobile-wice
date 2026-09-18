import { SelectOptionPage } from "./../select-option/select-option.page";
import { SuccessModelPage } from "./../success-model/success-model.page";
import { SignatureModelPage } from "./../signature-model/signature-model.page";
import { OrderModelPage } from "./../order-model/order-model.page";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilService } from "./../util.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";


import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Renderer,
  Input,
  ElementRef,
  AfterContentChecked,
  AfterContentInit,
} from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

import {
  NavController,
  AlertController,
  ModalController,
  Platform,
  LoadingController,
  PopoverController,
  ActionSheetController,
  IonContent,
} from "@ionic/angular";
import { ImageModalPage } from "../image-modal/image-modal.page";
import { HttpClient } from "@angular/common/http";
import { RemarkModalPage } from "../remark-modal/remark-modal.page";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { AddDropPage } from "../add-drop/add-drop.page";
import { AddOrderPage } from "../add-order/add-order.page";
import { EditOrderPage } from "../edit-order/edit-order.page";
import { AuthService } from "./../services/auth.service";



@Component({
  selector: "app-deliver",
  templateUrl: "./deliver.page.html",
  styleUrls: ["./deliver.page.scss"],
})
export class DeliverPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("imageCanvas", { static: false }) canvas: any;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  private ctx: CanvasRenderingContext2D | null = null;
  private drawing = false;
  private lastX = 0;
  private lastY = 0;

  information: any[];
  automaticClose = false;

  canvasElement: any;
  public showdelay: any;
  showimage: Array<SafeUrl> = [];
  public dropnumber: Array<any> = [];
  public openCamqrscan: any;
  public droupArray: Array<any> = [];
  countwork;
  selectedColor = "#000000";
  lineWidth = 5;
  img: string = null;
  public checktextinput = false;
  public status = "00";
  public note = "";
  public membership;
  public value;
  public posts;
  public btn_active = false;
  public boolhide = false;
  public textinputcomplete;
  public statusall: any;
  public hidebutton: any;
  public ordercount: number = 0;

  sliderOpts = {
    zoom: false,
    slidesPerview: 3,
    centeredSlides: true,
    spaceBetween: 20,
    nested: true,
    touchStartPreventDefault: false,
    touchReleaseOnEdges: true,
  };

  private clearCapturedImages() {
    this.showimage = [];
    this.utilservice.imgCompletejobList = [];
  }

  accordionExapanded = false;

  icon: string = "arrow-forward";

  private setQrScanningUi(isScanning: boolean) {
    const body = document.getElementsByTagName("body")[0];
    if (!body) return;
    body.style.opacity = isScanning ? "0" : "1";
    if (isScanning) {
      body.classList.add("qr-scanning");
    } else {
      body.classList.remove("qr-scanning");
    }
  }

  private stopQrScanning() {
    this.setQrScanningUi(false);
    try {
      this.qr.hide();
    } catch { }
    try {
      this.qr.destroy();
    } catch { }
    try {
      if (this.openCamqrscan) {
        this.openCamqrscan.unsubscribe();
        this.openCamqrscan = null;
      }
    } catch { }
  }

  constructor(
    private platform: Platform,
    private camera: Camera,
    public alertContrl: AlertController,
    public navController: NavController,
    private modalCtrl: ModalController,
    private http: HttpClient,
    public utilservice: UtilService,
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public router: Router,
    public qr: QRScanner,
    public activatedroute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public popoverController: PopoverController,
    public sanitizer: DomSanitizer,
    private authService: AuthService,
  ) {
    activatedroute.params.subscribe(async (val) => {
      this.showJoblist();
    });
  }

  async ngOnInit() {
    await this.utilservice.requestGPSPermission();
    // await this.downloadMyJob();
    this.dropnumber = [];
    this.countwork = 0;
    this.countwork = this.utilservice.completejobList.length;
    this.downloadStatus();
    if (this.utilservice.completejobList.length == 0) {
      this.boolhide = true;
    } else {
      this.boolhide = false;
    }
    this.showJoblist();

    // Do not restore cached images from UtilService on entry.
    // Images should not persist when navigating away and back to this page.
    this.showimage = [];
    
    // Ensure we never get stuck in qr-scanning mode (which blocks touch/scroll)
    this.setQrScanningUi(false);

    document.getElementById("chickrefresh").click();
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.stopQrScanning();
    });
    
    // Force enable scroll
    setTimeout(() => {
      if (this.content) {
        this.content.scrollY = true;
        this.content.forceOverscroll = true;
        // Force scroll events
        this.content.scrollEvents = true;
      }
    }, 100);
    
    // Additional force after view init
    setTimeout(() => {
      if (this.content) {
        this.content.scrollY = true;
        this.content.forceOverscroll = true;
      }
    }, 500);
  }

  ngOnDestroy() {
    this.stopQrScanning();
    this.clearCapturedImages();
  }

  ionViewWillLeave() {
    // Clear captured images immediately when leaving this page
    // so they won't remain in memory or show up when returning.
    this.clearCapturedImages();
  }

  ngAfterViewInit() {
    // Canvas setup moved to setupCanvas method
  }

  ionViewDidEnter() {
    setTimeout(() => this.setupCanvas(), 100);
  }

  setupCanvas() {
    const canvas = this.canvas.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    this.canvasElement = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(dpr, dpr);

    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.globalAlpha = 1;
    this.ctx.globalCompositeOperation = 'source-over';
  }

  private getXY(ev: any) {
    const canvas = this.canvas.nativeElement;
    const rect = canvas.getBoundingClientRect();

    const touch = (ev.touches && ev.touches[0]) || (ev.changedTouches && ev.changedTouches[0]);
    const pageX = touch ? touch.pageX : ev.pageX;
    const pageY = touch ? touch.pageY : ev.pageY;

    return { x: pageX - rect.left, y: pageY - rect.top };
  }

  public async startscanning() {
    this.qr.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qr.show();
        this.setQrScanningUi(true);

        this.openCamqrscan = this.qr.scan().subscribe(
          async (textfound) => {
            this.stopQrScanning();
            let orderList: Array<any> = [];
            for (let i = 0; i < this.utilservice.jobList.length; i++) {
              for (
                let k = 0;
                k < this.utilservice.jobList[i].orders.length;
                k++
              ) {
                orderList.push(this.utilservice.jobList[i].orders[k]);
              }
            }
            if (
              orderList.filter((e) => {
                return e.clienInvoiceNumber == textfound;
              }).length > 0
            ) {
              if (
                this.utilservice.completejobList.filter((e) => {
                  return e.clienInvoiceNumber == textfound;
                }).length > 0
              ) {
                const alert = await this.alertContrl.create({
                  cssClass: "my-custom-class",
                  header: "ผิดพลาด",
                  message: `สแกนซ่ำ`,
                  buttons: ["ตกลง"],
                });
                await alert.present();
              } else {
                orderList = orderList.filter((e) => {
                  return e.clienInvoiceNumber == textfound;
                });
                for (let j = 0; j < orderList.length; j++) {
                  orderList[j].shipping_status_deliver = true;
                  this.utilservice.completejobList.push(orderList[j]);
                }

                const alert = await this.alertContrl.create({
                  cssClass: "my-custom-class",
                  header: "สำเร็จ",
                  message: `เพิ่มรายการสำเร็จ`,
                  buttons: [
                    {
                      text: "ตกลง",
                      handler: () => {
                        this.checktextinput = false;
                        this.showJoblist();
                        if (this.utilservice.completejobList.length == 0) {
                          this.boolhide = true;
                        } else {
                          this.boolhide = false;
                        }
                      },
                    },
                  ],
                });
                await alert.present();
              }
            } else {
              const alert = await this.alertContrl.create({
                cssClass: "my-custom-class",
                header: "ผิดพลาด",
                message: `ไม่ผบข้อมูลหรือยังไม่ได้รับงาน`,
                buttons: ["ตกลง"],
              });
              await alert.present();
            }
            this.checktextinput = false;
            this.showJoblist();
            if (this.utilservice.completejobList.length == 0) {
              this.boolhide = true;
            } else {
              this.boolhide = false;
            }
          },
          (err) => {
            console.log(err);
            // Important: always clean up UI state so the app doesn't freeze
            this.stopQrScanning();
          }
        );
      } else if (status.denied) {
        this.stopQrScanning();
      } else {
        this.stopQrScanning();
      }
    });
  }

  public gettextinput = async () => {
    let orderList: Array<any> = [];
    for (let i = 0; i < this.utilservice.jobList.length; i++) {
      for (let k = 0; k < this.utilservice.jobList[i].orders.length; k++) {
        orderList.push(this.utilservice.jobList[i].orders[k]);
      }
    }
    console.log(orderList);
    if (
      orderList.filter((e) => {
        return e.clienInvoiceNumber == this.textinputcomplete;
      }).length > 0
    ) {
      if (
        this.utilservice.completejobList.filter((e) => {
          return e.clienInvoiceNumber == this.textinputcomplete;
        }).length > 0
      ) {
        const alert = await this.alertContrl.create({
          cssClass: "my-custom-class",
          header: "ผิดพลาด",
          message: `สแกนซ่ำ`,
          buttons: ["ตกลง"],
        });
        await alert.present();
      } else {
        orderList = orderList.filter((e) => {
          return e.clienInvoiceNumber == this.textinputcomplete;
        });
        console.log(orderList);
        for (let j = 0; j < orderList.length; j++) {
          console.log(orderList[j]);
          orderList[j].shipping_status_deliver = true;
          this.utilservice.completejobList.push(orderList[j]);
        }
        const alert = await this.alertContrl.create({
          cssClass: "my-custom-class",
          header: "สำเร็จ",
          message: `เพิ่มรายการสำเร็จ`,
          buttons: ["ตกลง"],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertContrl.create({
        cssClass: "my-custom-class",
        header: "ผิดพลาด",
        message: `ไม่ผบข้อมูลหรือยังไม่ได้รับงาน`,
        buttons: ["ตกลง"],
      });
      await alert.present();
    }

    this.checktextinput = false;
    this.textinputcomplete = "";
    this.showJoblist();
    if (this.utilservice.completejobList.length == 0) {
      this.boolhide = true;
    } else {
      this.boolhide = false;
    }
  };

  onChange(status) {
    // if (
    //   this.status.valueOf() == "1" ||
    //   this.status.valueOf() == undefined ||
    //   this.status.valueOf() == "00"
    // ) {
    //   this.utilservice.ishidden = false;
    // } else {
    //   this.utilservice.ishidden = true;
    // }
  }

  async delete_item(dataIndex, dropnumber) {
    return new Promise(async (resolve) => {
      const confirm = await this.alertContrl.create({
        header: "ยืนยันการลบ",
        message: "คุณต้องการลบหรือไม่",
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
              this.utilservice.completelist_table.splice(dataIndex, 1);
              this.utilservice.completejobList =
                this.utilservice.completejobList.filter((e) => {
                  return e.drop_number != dropnumber;
                });
              this.countwork = this.utilservice.completejobList.length;
              if (this.utilservice.completejobList.length == 0) {
                this.boolhide = true;
                this.utilservice.signatureData = "";
              } else {
                this.boolhide = false;
              }
              this.showJoblist();
              console.log(this.utilservice.completelist_table);
            },
          },
        ],
      });
      await confirm.present();
    });
  }
  async delete_order(i, idx, order_id) {
    return new Promise(async (resolve) => {
      const confirm = await this.alertContrl.create({
        header: "ยืนยันการลบ",
        message: "คุณต้องการลบหรือไม่",
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
              this.utilservice.completelist_table[i].orders.splice(idx, 1);
              this.utilservice.completejobList =
                this.utilservice.completejobList.filter((e) => {
                  return e.order_id != order_id;
                });
              this.countwork = this.utilservice.completejobList.length;
              if (this.utilservice.completejobList.length == 0) {
                this.boolhide = true;
                this.utilservice.signatureData = "";
              } else {
                this.boolhide = false;
              }
              this.showJoblist();
              console.log(this.utilservice.completelist_table);
            },
          },
        ],
      });
      await confirm.present();
    });
  }

  async delete_image(index, imgname) {
    return new Promise(async (resolve) => {
      const confirm = await this.alertContrl.create({
        header: "ยืนยันการลบ",
        message: "คุณต้องการลบรูปภาพนี้หรือไม่หรือไม่",
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
              this.utilservice.imgCompletejobList.splice(index, 1);
              // Sanitize URLs after deletion
              this.showimage = this.utilservice.imgCompletejobList.map(img => 
                this.sanitizer.bypassSecurityTrustUrl(img)
              );
            },
          },
        ],
      });
      await confirm.present();
    });
  }

  Deliver() {
    //this.navController.navigateForward("/deliver");
    this.router.navigate(["/deliver"]);
  }

  DeliverFinish() {
    this.clearCapturedImages();
    this.router.navigate(["/deliver-history"]);
    // this.navController.navigateForward("/deliver-history");
  }

  async openSelectPopOver() {
    const popover = await this.popoverController.create({
      component: SelectOptionPage,
      cssClass: "my-custom-class",
      translucent: true,
    });
    await popover.present();
  }

  openPreview(index: number) {
    // ดึง data URL จริงจาก imgCompletejobList แทน SafeUrl
    const imgDataUrl = this.utilservice.imgCompletejobList[index];
    
    this.modalCtrl
      .create({
        component: ImageModalPage,
        componentProps: {
          img: imgDataUrl,
        },
      })
      .then((modal) => modal.present());
  }

  // takePhoto() {
  //   const options: CameraOptions = {
  //     quality: 15,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     correctOrientation: true,

  //   };

  //   this.platform.ready().then(() => {
  //     if (this.platform.is('cordova')) {
  //       this.camera.getPicture(options).then((imageData) => {
  //         // imageData is either a base64 encoded string or a file URI
  //         // If it's base64 (DATA_URL):
  //         let base64Image = 'data:image/jpeg;base64,' + imageData;
  //       }, (err) => {
  //         console.log('เกิดข้อผิดพลาด' + err);
  //         // Handle error
  //       });
  //     }
  //   })
  // }
  takePhoto() {
    if (this.platform.is('cordova')) {
      const options: CameraOptions = {
        quality: 15,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,

      };



      this.camera.getPicture(options).then(
        (imageData) => {
          // เช็คว่า imageData มี prefix อยู่แล้วหรือไม่
          const dataUrl = imageData.startsWith('data:image')
            ? imageData
            : `data:image/jpeg;base64,${imageData}`;
          
          // Store the complete data URI
          this.utilservice.imgCompletejobList.push(dataUrl);
          
          // Sanitize URLs for display
          this.showimage = this.utilservice.imgCompletejobList.map(img => 
            this.sanitizer.bypassSecurityTrustUrl(img)
          );
          
          console.log('Images stored:', this.utilservice.imgCompletejobList);
        },
        (err) => {
          console.log('ผิดพลาด: ' + err);
        }
      );
    }

  }

  // Helper method to strip data URI prefix from base64 images
  private stripDataUriPrefix(dataUri: string): string {
    if (dataUri && dataUri.startsWith('data:')) {
      return dataUri.split(',')[1];
    }
    return dataUri;
  }

  submit_deliver = async (textAlert) => {
    let userLogin = await localStorage.getItem("userLogin");
    await this.utilservice.getLocationCoordinates();
    if (this.utilservice.imgCompletejobList.length > 0) {
      const alert = await this.alertContrl.create({
        cssClass: "my-custom-class",
        header: "",
        message: `<div>${textAlert}</div>
      <div>ส่งสำเร็จ ${this.utilservice.ordercount_success},ส่งไม่สำเร็จ ${this.utilservice.ordercount_fail}</div>
      `,
        buttons: [
          {
            text: "ยกเลิก",
            role: "cancel",
            handler: async (blah) => { },
          },
          {
            text: "ยืนยัน",
            handler: async () => {
              if (
                this.utilservice.ishidden == false &&
                this.utilservice.signatureData == ""
              ) {
                // const alert = await this.alertContrl.create({
                //   cssClass: "my-custom-class",
                //   header: "แจ้งเตือน",
                //   message: `กรุณากรอกลายเซ็น`,
                //   backdropDismiss: false,
                //   buttons: [
                //     {
                //       text: "ตกลง",
                //       handler: () => {
                //         this.getSignature("eventNotPass");
                //       },
                //     },
                //   ],
                // });
                // await alert.present();
                this.getSignature("eventNotPass");
              } else {
                console.log(this.utilservice.completejobList);
                const loading = await this.loadingController.create({
                  cssClass: "my-custom-class",
                  message: "กำลังบันทึกข้อมูล...",
                });
                await loading.present();
                
                // Strip data URI prefix from images before sending to API
                const base64ImgsOnly = this.utilservice.imgCompletejobList.map(img => this.stripDataUriPrefix(img));
                const signatureBase64Only = this.stripDataUriPrefix(this.utilservice.signatureData);
                
                let body = {
                  orders: this.utilservice.completejobList,
                  base64Imgs: base64ImgsOnly,
                  stImgBase64: signatureBase64Only,
                  lat: `${this.utilservice.locationData.latitude}`,
                  lng: `${this.utilservice.locationData.longitude}`,
                };
                console.log(body);
                this.http
                  .post(
                    `${this.utilservice.baseURL}api/DriverJob/CompleteDriverJobs`,
                    body,
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${JSON.parse(userLogin)["access_token"]
                          }`,
                      },
                    }
                  )
                  .toPromise()
                  .then(async (val: any) => {
                    console.log(val);
                    if (val.success) {
                      loading.dismiss();
                      // await this.downloadMyJob();
                      this.utilservice.completelist_table = [];
                      this.utilservice.imgCompletejobList = [];
                      this.utilservice.completejobList = [];
                      this.utilservice.signatureData = "";
                      this.clearCanvas();
                      this.dropnumber = [];
                      this.countwork = 0;
                      this.boolhide = true;
                      this.showJoblist();
                      this.openSuccessModel();
                      // this.router.navigate(["/home"]);
                    } else {
                      loading.dismiss();
                      const alert = await this.alertContrl.create({
                        cssClass: "my-custom-class",
                        header: "แจ้งเตือน",
                        message: `${val.message}`,
                        backdropDismiss: false,
                        buttons: [
                          {
                            text: "ตกลง",
                            handler: () => {
                              this.router.navigate(["/home"]);
                            },
                          },
                        ],
                      });
                      await alert.present();
                    }
                  });
              }
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertContrl.create({
        cssClass: "my-custom-class",
        header: "",
        message: `<div>ต้องมีการถ่ายรูปอย่างน้อย 1 รูปภาพ</div>`,
        buttons: [
          {
            text: "ตกลง",
            // role: "cancel",
            handler: async (blah) => { },
          },

        ],
      }); await alert.present();
    }


  };

  public showJoblist = () => {
    this.ordercount = 0;
    this.utilservice.completelist_table = [];
    this.droupArray = this.utilservice.completejobList
      .map((item) => item.drop_number)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let i = 0; i < this.droupArray.length; i++) {
      let completejobList_order = this.utilservice.completejobList.filter(
        (e) => {
          return e.drop_number == this.droupArray[i];
        }
      );
      let completejob_drop: {
        drop_number: any;
        order_count: any;
        orders: Array<any>;
      } = {
        drop_number: this.droupArray[i],
        order_count: completejobList_order.length,
        orders: completejobList_order,
      };
      this.utilservice.completelist_table.push(completejob_drop);
      this.ordercount =
        this.ordercount +
        this.utilservice.completelist_table[i].order_count * 1;
    }
    this.utilservice.ordercount_success =
      this.utilservice.completejobList.filter((e) => {
        return e.shipping_status_deliver == true;
      }).length;
    this.utilservice.ordercount_fail = this.utilservice.completejobList.filter(
      (e) => {
        return e.shipping_status_deliver == false;
      }
    ).length;
    this.checkhtmlshowcanvas();
  };

  public checkhtmlshowcanvas = () => {
    let countshowcanvas = 0;

    for (let j = 0; j < this.utilservice.completelist_table.length; j++) {
      for (
        let k = 0;
        k < this.utilservice.completelist_table[j].orders.length;
        k++
      ) {
        if (
          this.utilservice.completelist_table[j].orders[k]
            .shipping_status_deliver == true
        ) {
          countshowcanvas++;
        }
      }
    }
    if (countshowcanvas > 0) {
      this.utilservice.ishidden = false;
      countshowcanvas = 0;
    } else {
      this.utilservice.ishidden = true;
      // Do not clear signature here. Users may sign first and adjust items later;
      // clearing it causes the signature preview to disappear unexpectedly.
    }
  };

  openModal(i, index) {
    this.modalCtrl
      .create({
        component: RemarkModalPage,
        componentProps: {
          remark: this.utilservice.completejobList[index],
        },
      })
      .then((modal) => modal.present());
  }

  openOrderModel(index) {
    this.modalCtrl
      .create({
        component: OrderModelPage,
        componentProps: {
          remark: this.utilservice.completejobList[index].orders,
        },
      })
      .then((modal) => modal.present());
  }

  public downloadStatus = () => {
    let userLogin = localStorage.getItem("userLogin");
    this.http
      .post(`${this.utilservice.baseURL}api/DriverJob/SyncRejectReasons`, ``, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
        },
      })
      .toPromise()
      .then((val) => {
        this.statusall = val;
      });
  };

  startDrawing(ev) {
    const { x, y } = this.getXY(ev);
    this.drawing = true;
    this.lastX = x;
    this.lastY = y;
  }

  endDrawing() {
    this.drawing = false;
  }

  moved(ev) {
    if (!this.drawing) return;
    if (ev.preventDefault) {
      ev.preventDefault();
    }

    const { x, y } = this.getXY(ev);

    requestAnimationFrame(() => {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.lastX = x;
      this.lastY = y;
    });
  }

  clearCanvas = () => {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  };

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
            if (val) {
              this.utilservice.servicedropcount = 0;
              this.utilservice.serviceordercount = 0;
              this.utilservice.jobList = val;
              console.log(val);
              this.utilservice.servicedropcount =
                this.utilservice.jobList.length;
              for (let i = 0; i < this.utilservice.jobList.length; i++) {
                for (
                  let j = 0;
                  j < this.utilservice.jobList[i].orders.length;
                  j++
                ) {
                  this.utilservice.serviceordercount =
                    this.utilservice.serviceordercount + 1;
                }
              }
            } else {
              this.utilservice.servicedropcount = 0;
              this.utilservice.serviceordercount = 0;
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
        console.log('[Deliver] TokenValidate failed, attempting re-login...', reason);
        await this.authService.handleTokenError();
      });
  };

  addDropModal() {
    this.modalCtrl
      .create({
        component: AddDropPage,
      })
      .then((modal) => modal.present());
  }

  addOrderModal() {
    this.modalCtrl
      .create({
        component: AddOrderPage,
      })
      .then((modal) => modal.present());
  }

  editOrder(i, idx, status) {
    this.modalCtrl
      .create({
        component: EditOrderPage,
        backdropDismiss: false,
        componentProps: {
          droupindex: i,
          orderindex: idx,
          order: this.utilservice.completelist_table[i].orders[idx],
          checkstatus: status,
        },
      })
      .then((modal) => modal.present());
  }

  public async getSignature(eventsString) {
    // this.modalCtrl
    //   .create({
    //     component: SignatureModelPage,
    //     backdropDismiss: false,
    //     componentProps: {
    //       event: eventsString,
    //     },
    //   })
    //   .then((modal) => modal.present());

    const modal = await this.modalCtrl.create({
      component: SignatureModelPage,
      backdropDismiss: false,
      componentProps: {
        event: eventsString,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (eventsString == "eventNotPass" && data.data.checkClose !== "close") {
        this.submit_deliver("ยืนยันการนำส่ง");
      }
    });
    return await modal.present();
  }

  public changeCheckbox_Shipping = (i, idx, event, status) => {
    this.utilservice.completelist_table[i].orders[idx].shipping_status_deliver =
      event.target.checked;
    if (
      this.utilservice.completelist_table[i].orders[idx].shipping_status_deliver
    ) {
      this.utilservice.completelist_table[i].orders[idx].shipping_status_code =
        "00";
      this.utilservice.completelist_table[i].orders[idx].remark_reason = null;
      this.utilservice.completelist_table[i].orders[idx].rejectReason = null;
    } else {
      this.editOrder(i, idx, status);
      if (
        this.utilservice.completelist_table[i].orders[idx].remark_reason !==
        null &&
        this.utilservice.completelist_table[i].orders[idx]
          .shipping_status_code === "R00"
      ) {
      }
    }
    this.utilservice.ordercount_success =
      this.utilservice.completejobList.filter((e) => {
        return e.shipping_status_deliver == true;
      }).length;
    this.utilservice.ordercount_fail = this.utilservice.completejobList.filter(
      (e) => {
        return e.shipping_status_deliver == false;
      }
    ).length;
    this.checkhtmlshowcanvas();
  };

  historydeliver() {
    this.router.navigate(["/deliver-history"]);
  }

  public openSuccessModel() {
    this.modalCtrl
      .create({
        component: SuccessModelPage,
        backdropDismiss: false,
      })
      .then((modal) => modal.present());
  }
}
