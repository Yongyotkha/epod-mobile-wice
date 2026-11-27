import { RepasswordModalPage } from "./../repassword-modal/repassword-modal.page";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  NavController,
  AlertController,
  LoadingController,
  ModalController,
  ActionSheetController,
} from "@ionic/angular";
import { UtilService } from "./../util.service";
import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from '@ionic-native/file/ngx';
import { WebBridgeService } from "../services/web-bridge.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage implements OnInit {
  public changeImgProfile:Array<any> = [];
  public changePhoneProfle: any;
  public changeCarNumber: any;
  public checkDisable = true;

  constructor(
    public utilservice: UtilService,
    public navController: NavController,
    public http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router,
    private modalCtrl: ModalController,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private file: File,
    private webBridge: WebBridgeService,
  ) {}

  async ngOnInit() {
    await this.syncDriverInfo();
    this.changePhoneProfle = await this.utilservice.driverInfo.mobile
    this.changeCarNumber = await this.utilservice.driverInfo.carNumber
    this.changeImgProfile[0] = await this.utilservice.driverInfo.image
  }

  public SaveProfile() {
    console.log(this.changePhoneProfle+':'+this.changeCarNumber)
  }

  public checkEventPhone (){
      if(this.changePhoneProfle !== this.utilservice.driverInfo.mobile){
          this.checkDisable = false
      }else{
        this.checkDisable = true
      }
  }

  public checkEventCarNumber (){
    if(this.changePhoneProfle !== this.utilservice.driverInfo.carNumber){
      this.checkDisable = false
    }else{
      this.checkDisable = true
    }
  }

  pickImage(sourceType) {
    if (!this.webBridge.isNative()) {
      const preferCamera = sourceType === this.camera.PictureSourceType.CAMERA;
      this.webBridge.capturePhoto(1280, 0.75, preferCamera).then(
        (dataUrl) => {
          const base64 = dataUrl.indexOf(',') >= 0 ? dataUrl.split(',')[1] : dataUrl;
          this.changeImgProfile[0] = base64;
          this.checkDisable = false;
          console.log(this.changeImgProfile[0]);
        },
        () => { }
      );
      return;
    }

    const options: CameraOptions = {
      quality: 75,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    }
    this.camera.getPicture(options).then((imageData) => {
          this.changeImgProfile[0] = imageData
          this.checkDisable = false
          console.log( this.changeImgProfile[0])
    }, (err) => {
    });
  }

  public async selectImage(){
    const actionSheet = await this.actionSheetController.create({
      header: "เลือกรูป",
      buttons: [{
        text: 'คลัง',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'ถ่ายรูป',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'ยกเลิก',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
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
        } else {
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

  public Home() {
    this.router.navigate(["/home"]);
  }

  public openModalRepass() {
    this.modalCtrl
      .create({
        component: RepasswordModalPage,
      })
      .then((modal) => modal.present());
  }
}
