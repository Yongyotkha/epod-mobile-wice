import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UtilService } from './util.service';
import { ApiService } from './api.service';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  primaryColor: any;
  secondryColor: any;
  public keywords: any = {};
  public role;
  public roleId;
  public color: any;
  subPage = {}

  public menus = [
    {
      title: 'หน้าหลัก',
      url: '/home',
      icon_md: 'md-home',
      icon_ios: 'ios-home',
      color: 'primary',
    },
    {
      title: 'รับงาน',
      url: '/getjob',
      icon_md: 'md-document',
      icon_ios: 'ios-document',
      color: 'primary',
    },
    {
      title: 'งานของฉัน',
      url: '/deliver-history',
      icon_md: 'md-briefcase',
      icon_ios: 'ios-briefcase',
      color: 'primary',
    },
    {
      title: 'นำส่ง',
      url: '/deliver',
      icon_md: 'md-send',
      icon_ios: 'ios-send',
      color: 'primary',
    },
    // {
    //   title: 'ตั้งค่า',
    //   url: '/edit-profile',
    //   icon_md: 'md-send',
    //   icon_ios: 'ios-send',
    //   color: 'primary',
    // },
    {
      title: 'เปลี่ยนรหัสผ่าน',
      url: '/repassword-modal',
      icon_md: 'md-send',
      icon_ios: 'ios-send',
      color: 'primary',
    },
    {
      title: 'ออกจากระบบ',
      url: '/home',
      icon_md: 'md-exit',
      icon_ios: 'ios-exit',
      color: 'danger',
    }
  ];

  public pages = [
    {
      title: 'Login',
      url: '/login'
    },
    {
      title: 'Register',
      url: '/register'
    },
    {
      title: 'Forgot Password',
      url: '/forgot-password'
    },
    {
      title: 'Profile',
      url: '/profile/1'
    },
    {
      title: 'Walkthrough',
      url: '/walkthrough'
    }
  ];

  constructor(private platform: Platform, private splashScreen: SplashScreen, public dataService: JsonService,
    private statusBar: StatusBar, public router: Router, public util: UtilService, public apiservice: ApiService) {
    this.initializeApp();
    if (localStorage.getItem('keywords')) {
      this.keywords = JSON.parse(localStorage.getItem('keywords'));
    }
  }

  ngOnInit() {
    this.util.requestGPSPermission();
    
    // Override Storage.prototype.clear to preserve remember me credentials globally (supports iOS WKWebView)
    const originalClear = Storage.prototype.clear;
    Storage.prototype.clear = function() {
      if (this === localStorage) {
        const rememberMe = localStorage.getItem('rememberMe');
        const savedUsername = localStorage.getItem('savedUsername');
        const savedPassword = localStorage.getItem('savedPassword');
        
        originalClear.apply(this);
        
        if (rememberMe) localStorage.setItem('rememberMe', rememberMe);
        if (savedUsername) localStorage.setItem('savedUsername', savedUsername);
        if (savedPassword) localStorage.setItem('savedPassword', savedPassword);
      } else {
        originalClear.apply(this);
      }
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#0A15D5');
      this.splashScreen.hide();
      console.log(this.router.getCurrentNavigation())
      if (localStorage.getItem("loginStatus")) {
        this.router.navigateByUrl('/home');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
    this.getLanguages();
    this.menuOpened();
  }
  menuOpened() {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    // this.menus = JSON.parse(localStorage.getItem('menus'));
    // // console.log(this.menus);
    // // if (localStorage.getItem('menus')){
    //   for (const [key, value] of this.menus) {
    //     console.log(key, value);
    //   // }
    // }

  }
  getLanguages() {
    // var url = this.apiservice.getLanguage();
    // var token = { token: "DQCTPQMKK9R6SXN4" };
    // var language;
    // if (localStorage.getItem('language')) {
    //   language = localStorage.getItem('language');
    // }
    // else {
    //   language = "en";
    // }
    // var data = { code: language };
    // console.log(data);
    // this.util.postService(url, data, token)
    //   .then((data: any) => {
    //     //console.log(data);
    //     var resp = JSON.parse(data.data);
    //     this.keywords = resp.data[0];
    localStorage.setItem("keywords", JSON.stringify(this.dataService.keywords));
    //     console.log(resp);

    //     //console.log(resp.data.unique_code);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     // this.loading.dismiss();
    //     this.util.showAlert(
    //       "SMART HRMS",
    //       "Unable to reach server at the moment"
    //     );
    //   });
  }
  menuClosed() {
    this.role = localStorage.getItem("role");
    this.roleId = localStorage.getItem("role_id");
    // this.menus = JSON.parse(localStorage.getItem('menus'));
    // // console.log(this.menus);
  }

  getstyle() {
    this.primaryColor = localStorage.getItem("primary_color");
    this.secondryColor = localStorage.getItem("secondry_color");
    return {
      background:
        "linear-gradient(" + this.primaryColor + "," + this.secondryColor + ")"
    };
  };

  openSub(page) {
    this.subPage = Object.assign({}, { [page]: !this.subPage[page] });
    console.log(this.subPage);

  }

  logout() {
    this.util.logout("Confirm", "Are you sure want to logout?", this.color);
  }

  public onLogout = (data: any) => {
    if (this.menus[parseInt(data)].title == "ออกจากระบบ") {
      console.log(this.menus[parseInt(data)].title)
      this.util.logout("ยืนยันการออกจากระบบ", "คุณต้องการออกจากระบบหรือไม่?", this.color);
    }

  }
}
