import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
  Events,
  ModalController,
} from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  public isModal = "";
  public baseURL = "https://tms.wicesupplychain.com/api/";
  // public baseURL = " https://scgp-bp-uat.wicesupplychain.com/";
  //public baseURL='http://aplltrack.com/'
  public signatureData = "";
  public driverInfo: {
    driverCode: string;
    firstName: string;
    lastName: string;
    success: boolean;
    carNumber: string;
    image: string;
    mobile: string;
    date_today: String;
  } = {
      driverCode: "",
      firstName: "",
      lastName: "",
      success: false,
      carNumber: "",
      image: "",
      mobile: "",
      date_today: "",
    };
  public locationData: {
    latitude: string;
    longitude: string;
    accuracy: string;
    timestamp: string;
  } = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: "",
    };
  public ordercount_success: number = 0;
  public ordercount_fail: number = 0;
  public jobList: Array<any> = [];
  public completejobList: Array<any> = [];
  public getjoblist: Array<any> = [];
  public imgCompletejobList: Array<any> = [];
  public orderJoblist: Array<any> = [];
  public completelist_table: Array<any> = [];
  public ishidden = false;
  public serviceordercount = 0;
  public servicedropcount = 0;
  public numberVersion = "1.0.8";
  constructor(
    public navCntrl: NavController,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public alertContrl: AlertController,
    public navControl: NavController,
    public loadingCtrl: LoadingController,
    public http: HTTP,
    public httpclient: HttpClient,
    public events: Events,
    public modalCtrl: ModalController,
    private navCtrl: NavController,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy
  ) {
    try {
      // สำหรับ cordova-plugin-advanced-http
      (this.http as any).setDataSerializer("json");
    } catch (e) {
        console.log("setDataSerializer not available", e);
      }
    }

    popBack() {
    this.navCntrl.pop();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async showAlert(header, message) {
    const alert = await this.alertContrl.create({
      header: header,
      message: message,
      buttons: ["OK"],
    });
    await alert.present();
  }

  async showConfirmAlert(header, message, successMessage) {
    const confirm = await this.alertContrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => { },
        },
        {
          text: "OK",
          handler: () => {
            this.showAlert("Smart HR", successMessage);
          },
        },
      ],
    });
    await confirm.present();
  }

  deleteAlert(header, message) {
    return new Promise((resolve) => {
      let self = this;
      async function asyncCall(self) {
        const confirm = await self.alertContrl.create({
          header: header,
          message: message,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: () => { },
            },
            {
              text: "OK",
              handler: () => {
                resolve("ok");
              },
            },
          ],
        });
        await confirm.present();
      }
      asyncCall(self);
    });
  }

  async logout(header, message, color) {
    const confirm = await this.alertContrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: "ยกเลิก",
          role: "cancel",
          handler: () => { },
        },
        {
          text: "ยืนยัน",
          handler: () => {
            localStorage.clear();
            localStorage.setItem("colorCode", color);
            this.navControl.navigateRoot("/login");
          },
        },
      ],
    });
    await confirm.present();
  }

  loading() {
    let loading = this.loadingCtrl.create({
      message: "Please wait..",
      duration: 2000,
    });
    return loading;
  }

  postService(url, data, token) {
    return new Promise((resolve, reject) => {
      // 1) แปลง token/headers ให้เป็น plain object เสมอ
      let headers: any = token || {};

      // ถ้าเผลอส่ง HttpHeaders (Angular) เข้ามา จะมี keys()/lazyUpdate/normalizedNames
      if (headers && typeof headers.keys === "function") {
        const obj: any = {};
        headers.keys().forEach((k) => (obj[k] = headers.get(k)));
        headers = obj;
      }

      // 2) ใส่ header พื้นฐานสำหรับ JSON
      headers["Content-Type"] = headers["Content-Type"] || "application/json";
      headers["Accept"] = headers["Accept"] || "application/json";

      console.log("⚡️ [POST] url =", url);
      console.log("⚡️ [POST] headers =", headers);
      try {
        console.log("⚡️ [POST] data =", JSON.stringify(data));
      } catch {
        console.log("⚡️ [POST] data =", data);
      }

      // 3) สำคัญ: Native HTTP ควรตั้ง serializer เป็น json (ดู Step 2)
      this.http.post(url, data, headers).then(
        (res) => {
          console.log("✅ [POST] res =", res);
          try {
            console.log(
              "✅ [POST] res.data =",
              typeof res.data === "string" ? res.data : JSON.stringify(res.data)
            );
          } catch {}
          resolve(res);
        },
        (err) => {
          console.log("❌ [POST] err =", err);
          console.log(
            "❌ [POST] err.status =",
            err && (err.status || err.statusCode) ? (err.status || err.statusCode) : null
          );
          console.log(
            "❌ [POST] err.error =",
            err && err.error ? err.error : null
          );
          console.log(
            "❌ [POST] err.headers =",
            err && err.headers ? err.headers : null
          );
          console.log("❌ [POST] err.url =", url);
          reject(err);
        }
      );
    });
  }

  getService(url, data, token) {
    return new Promise((resolve, reject) => {
      this.http.get(url, data, token).then(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getParams(key) {
    return new Promise((resolve, reject) => {
      this.activatedRoute.queryParams.subscribe((params) => {
        if (this.router.getCurrentNavigation().extras.state) {
          resolve(this.router.getCurrentNavigation().extras.state[key]);
        } else {
          reject("no-params");
        }
      });
    });
  }

  public navRouter = {
    forward: (path: string) => {
      this.navCtrl.navigateForward(path);
    },
    back: () => {
      this.navCtrl.back();
    },
    setRoot: (path: string) => {
      this.navCtrl.navigateRoot(path);
    },
  };

  public delay = (ms: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions
          .requestPermission(
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
          )
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            (error) => {
              //Show alert if user click on 'No Thanks'
              console.log(error);
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        () => {
          // When GPS Turned ON call method to get Accurate location coordinates
          this.getLocationCoordinates();
        },
        (error) => console.log(error)
      );
  }

  getLocationCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.locationData.latitude = resp.coords.latitude.toString();
        this.locationData.longitude = resp.coords.longitude.toString();
        this.locationData.accuracy = resp.coords.accuracy.toString();
        this.locationData.timestamp = resp.timestamp.toString();
      })
      .catch((error) => {
        console.error("Error getting location:", error);
        const errorMessage = (error && error.message) || (error && error.code) || JSON.stringify(error);
        alert("Error getting location: " + errorMessage);
      });
  }
}
