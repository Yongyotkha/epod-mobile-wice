import { Component, OnInit } from "@angular/core";
import {
  NavController,
  MenuController,
  LoadingController,
  AlertController,
} from "@ionic/angular";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { UtilService } from "../util.service";
import { PermissionService } from "../services/permission.service";
import { ApiService } from "../api.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public username1 = false;
  public password1 = false;
  public loginForm: FormGroup;
  public primaryColor: any;
  public secondryColor: any;
  public show_error_auth: boolean = false;
  public showPassword: boolean = false;
  public rememberMe: boolean = false;

  public keywords: any = {};
  blackLogo: any;
  device_id: any;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private fb: FormBuilder,
    public statusBar: StatusBar,
    private referenceservice: UtilService,
    private apiservice: ApiService,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public utilservice:UtilService,
    public http:HttpClient,
    private permissionService: PermissionService,
  ) {
    this.loginForm = fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      device_id: ["", []],
    });
    this.primaryColor = "#0A15D5";
    this.secondryColor = "#0cd1e8";
    this.blackLogo = "assets/imgs/wice-logo.png";
    localStorage.setItem("primary_color", "#44bbec");
    localStorage.setItem("secondry_color", "#0163fc");
    localStorage.setItem("black_logo", "assets/imgs//wice-logo.png");
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString(this.primaryColor);
    this.primaryColor = localStorage.getItem("primary_color");
    this.menuCtrl.swipeEnable(false);
  }

    async ngOnInit() { 
      await this.utilservice.requestGPSPermission()
      // request camera permission (returns true if granted)
      try { await this.permissionService.requestCameraPermission(); } catch (e) { console.warn('camera permission request failed', e); }
      this.utilservice.jobList = []
      this.utilservice.getjoblist = []
      this.utilservice.completejobList = []
      this.utilservice.completelist_table = []

      // โหลดข้อมูลจำรหัสผ่าน
      const saved = localStorage.getItem('rememberMe');
      if (saved === 'true') {
        this.rememberMe = true;
        const savedUsername = localStorage.getItem('savedUsername') || '';
        const savedPassword = localStorage.getItem('savedPassword') || '';
        this.loginForm.patchValue({
          username: savedUsername,
          password: savedPassword
        });
      }
   }
  forgotPassword() {
    this.navCtrl.navigateForward("/forgot-password");
  }

  register() {
    this.navCtrl.navigateForward("/register");
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }



  login = async () => {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "กำลังเข้าสู่ระบบ...",
    });
    await loading.present();
    
    console.log('LOGIN URL =', environment.apiUrl, 'referenceservice.baseURL =', this.referenceservice.baseURL);

    const url = `${this.referenceservice.baseURL}token`;
    const body = new HttpParams()
      .set('username', this.loginForm.value.username)
      .set('password', this.loginForm.value.password)
      .set('grant_type', 'password');

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    });

    console.log('TOKEN FULL URL =', url);
    console.log('TOKEN BODY =', body.toString());

    this.httpClient
      .post(url, body.toString(), { headers })
      .toPromise()
      .then(async (val: any) => {
        if (val.access_token) {
          await localStorage.setItem("userLogin", JSON.stringify(val));
          await localStorage.setItem("loginStatus", "true");
          // บันทึกข้อมูลจำรหัสผ่าน
          if (this.rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('savedUsername', this.loginForm.value.username);
            localStorage.setItem('savedPassword', this.loginForm.value.password);
          } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
          }
          this.navCtrl.navigateRoot("/home");
        } else {
          const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
            subHeader: "รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            buttons: ["ตกลง"],
          });
          await alert.present();
        }
      })
      .catch(async (reason) => {
        const alert = await this.alertController.create({
          cssClass: "my-custom-class",
          header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
          subHeader: "รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
          buttons: ["ตกลง"],
        });
        await alert.present();
      })
      .finally(() => {
        loading.dismiss();
      });
  };

}
