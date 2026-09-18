(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"blues-nav\">\n    <ion-buttons slot=\"start\" class=\"nav-content\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>หน้าหลัก</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background: #fff\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"ดึงเพื่อรีเฟรช\"\n      refreshingSpinner=\"crescent\"\n      refreshingText=\"กำลังโหลด...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"dash-time\">\n    <div class=\"time\" hidden>11:38</div>\n    <div class=\"date\">{{utilservice.driverInfo.date_today}}</div>\n  </div>\n\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\" class=\"avatar-icon\">\n        <ion-img src=\"{{utilservice.driverInfo.image}}\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2 class=\"fwb\">\n          ชื่อ:{{ utilservice.driverInfo.firstName }} {{\n          utilservice.driverInfo.lastName }}\n        </h2>\n        <p>รหัส.{{utilservice.driverInfo.driverCode}}</p>\n        <p>เบอร์โทร.{{utilservice.driverInfo.mobile}}</p>\n        <p>ทะเบียนรถ : {{utilservice.driverInfo.carNumber}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-row>\n    <ion-col no-padding>\n      <div class=\"card-header\">\n        รายงานการส่ง\n        <span>20 บิล</span>\n      </div>\n    </ion-col>\n  </ion-row> -->\n\n  <div class=\"mydash\">\n    <ion-row class=\"py-md\">\n      <ion-col size=\"6\">\n        <div class=\"card\" (click)=\"DeliverFinish()\">\n          <img src=\"assets/imgs/location-marker.png\" alt=\"\" />\n          <p>จำนวนจุดส่ง</p>\n          <p>{{ this.utilservice.servicedropcount }}</p>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"card\" (click)=\"DeliverFinish()\">\n          <img src=\"assets/imgs/invoiceall.png\" alt=\"\" />\n          <p>Orders</p>\n          <p>{{ this.utilservice.serviceordercount }}</p>\n        </div>\n      </ion-col>\n     <!-- <ion-col size=\"6\">\n        <div class=\"card\" (click)=\"DeliverFinish()\">\n          <img src=\"./../../assets/imgs/waiting.png\" alt=\"\" />\n          <p>บิลรอส่ง</p>\n          <p>2</p>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"card\" (click)=\"DeliverFinish()\">\n          <img src=\"./../../assets/imgs/fail.png\" alt=\"\" />\n          <p>บิลที่ส่งไม่ได้</p>\n          <p>2</p>\n        </div>\n      </ion-col>-->\n    </ion-row>\n  </div>\n\n  <ion-button expand=\"full\" color=\"warning\" (click)=\"Getjob();\" size=\"large\"\n    >รับงาน &nbsp;\n    <ion-icon ios=\"ios-qr-scanner\" md=\"md-qr-scanner\" class=\"fs-30\"></ion-icon>\n  </ion-button>\n  <ion-button\n    expand=\"full\"\n    color=\"primary\"\n    (click)=\"DeliverFinish();\"\n    size=\"large\"\n    >งานของฉัน &nbsp; <fa-icon icon=\"list\"> </fa-icon>\n  </ion-button>\n  <ion-button expand=\"full\" color=\"success\" (click)=\"Deliver();\" size=\"large\"\n    >นำส่ง &nbsp; <fa-icon icon=\"address-card\"> </fa-icon>\n  </ion-button>\n  <ion-button expand=\"full\" color=\"success\" (click)=\"downloadMyJob();\" id=\"downmyjob\" hidden\n  >นำส่ง &nbsp; <fa-icon icon=\"truck-moving\"> </fa-icon>\n</ion-button>\n</ion-content>\n\n<ion-footer no-shadow hidden>\n  <ion-toolbar position=\"bottom\">\n    <section class=\"full-width\">\n      <ion-button expand=\"full\" color=\"warning\" (click)=\"Getjob();\"\n        >รับงาน &nbsp;<fa-icon icon=\"hand-pointer\"></fa-icon>\n      </ion-button>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"DeliverFinish();\"\n        >งานของฉัน &nbsp; <fa-icon icon=\"truck-moving\"> </fa-icon>\n      </ion-button>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"downloadMyJob();\"\n      >นำส่ง &nbsp; <fa-icon icon=\"truck-moving\"> </fa-icon>\n    </ion-button>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"Deliver();\"\n        >นำส่ง &nbsp; <fa-icon icon=\"truck-moving\"> </fa-icon>\n      </ion-button>\n    </section>\n  </ion-toolbar>\n</ion-footer>\n "

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #2b388f;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.dashboard-area {\n  top: -100px;\n  position: relative;\n  width: 100%;\n  padding: 0 20px;\n}\n\n.dashboard-col {\n  padding: 10px !important;\n  height: 180px;\n}\n\n.dashboard-col:nth-of-type(even) {\n  margin-top: 50px;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.dash-widget {\n  background: #fff;\n  border: 1px solid #e7e7e7;\n  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.08);\n  margin-bottom: 10px;\n  overflow: hidden;\n  padding: 15px;\n  height: 180px;\n  text-align: center;\n  margin: 0 auto;\n  border-radius: 25px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.dash-amount {\n  font-size: 22px;\n  font-weight: 800;\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n\n.dash-text {\n  font-size: 18px;\n  margin-top: 0;\n  font-weight: normal;\n  white-space: nowrap;\n}\n\n.blues-nav {\n  --background: #2b388f;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n.dash-widget-icon span {\n  font-size: 80px;\n  border-radius: 50px;\n  border: solid 1px;\n}\n\n.dash-widget-icon .custom-icon-dashboard-project-icon,\n.dash-widget-icon .custom-icon-dashboard-employee-icons {\n  border-color: #fe9c45;\n}\n\n.dash-widget-icon .custom-icon-dashboard-project-icon:before,\n.dash-widget-icon .custom-icon-dashboard-employee-icons:before {\n  color: #fe9c45;\n}\n\n.dash-widget-icon .custom-icon-dashboard-client-icon,\n.dash-widget-icon .custom-icon-dashboard-invoice-icons {\n  border-color: #2b388f;\n}\n\n.dash-widget-icon .custom-icon-dashboard-client-icon:before,\n.dash-widget-icon .custom-icon-dashboard-invoice-icons:before {\n  color: #2b388f;\n}\n\n.avatar-icon {\n  width: 75px;\n  height: 75px;\n}\n\nion-label > p {\n  color: #333;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n.mydash {\n  background: #373B44;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(#2b388f), to(#2b2d33));\n  background: linear-gradient(to bottom, #2b388f, #2b2d33);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.card {\n  width: 100%;\n  height: 120px;\n  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3), 0px -4px 15px -3px rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #fff;\n  border-radius: 5px;\n}\n\n.card img {\n  height: 40px;\n}\n\n.card ion-icon {\n  font-size: 30px;\n  color: #333;\n}\n\n.card.success {\n  background-color: #0ec254;\n}\n\n.card.warning {\n  background-color: #fe9c45;\n}\n\n.card.danger {\n  background-color: #af2531;\n}\n\n.card p {\n  color: #333;\n  margin: 0;\n  font-size: 20px;\n}\n\n.card p:last-of-type {\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 1;\n}\n\nion-title {\n  color: white;\n}\n\n.list-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 12px;\n  margin-bottom: 1rem;\n  background: #fff;\n}\n\n.card-header {\n  background: #fff;\n  color: #333;\n  height: 60px;\n  padding-left: 1rem;\n  font-weight: bold;\n  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  z-index: 1;\n}\n\n.card-header span {\n  background: #f04141;\n  width: 80px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.py-md {\n  padding: 1rem 0;\n}\n\n.dash-time {\n  background: #373B44;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(#2b388f), to(#2b2d33));\n  background: linear-gradient(to bottom, #2b388f, #2b2d33);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  height: 100px;\n  text-align: center;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.dash-time .time {\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.dash-time .date {\n  font-weight: 700;\n  font-size: 20px;\n}\n\n.fwb {\n  font-weight: bold;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsOENBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRE9BO0VBQ0UsV0FBQTtBQ0pGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURVRTs7RUFFRSxxQkFBQTtBQ1BKOztBRFVFOztFQUVFLGNBQUE7QUNSSjs7QURXRTs7RUFFRSxxQkFBQTtBQ1RKOztBRFlFOztFQUVFLGNBQUE7QUNWSjs7QURjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDWEY7O0FEY0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1hGOztBRGNBO0VBQ0UsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNkMsK0JBQUE7RUFDbkUsdUZBQUE7RUFBQSx3REFBQTtFQUEwRCxxRUFBQTtBQ1I1RDs7QURVQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURRRTtFQUNFLFlBQUE7QUNOSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDTko7O0FEUUU7RUFDRSx5QkFBQTtBQ05KOztBRFFFO0VBQ0UseUJBQUE7QUNOSjs7QURRRTtFQUNFLHlCQUFBO0FDTko7O0FEUUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNOSjs7QURPSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNMTjs7QURTQTtFQUNFLFlBQUE7QUNORjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMRjs7QURNRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNKSjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzZDLCtCQUFBO0VBQ25FLHVGQUFBO0VBQUEsd0RBQUE7RUFBMEQscUVBQUE7RUFDMUQsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRkY7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNESjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaG9tZS1kYXRhLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQtYXJlYSB7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmRhc2hib2FyZC1jb2wge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTgwcHhcbn1cblxuLmRhc2hib2FyZC1jb2w6bnRoLW9mLXR5cGUoZXZlbikge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5kYXNoLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5ibHVlcy1uYXYge1xuICAtLWJhY2tncm91bmQ6ICMyYjM4OGY7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLm5hdi1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcHRuLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gZmEtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4vLyAuc2MtaW9uLWNhcmQtbWQtcyBpbWcge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgd2lkdGg6IDgwJTtcbi8vICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4vLyB9XG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuXG4uZGFzaC13aWRnZXQtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24ge1xuXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtcHJvamVjdC1pY29uLFxuICAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWVtcGxveWVlLWljb25zIHtcbiAgICBib3JkZXItY29sb3I6ICNmZTljNDU7XG4gIH1cblxuICAuY3VzdG9tLWljb24tZGFzaGJvYXJkLXByb2plY3QtaWNvbjpiZWZvcmUsXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtZW1wbG95ZWUtaWNvbnM6YmVmb3JlIHtcbiAgICBjb2xvcjogI2ZlOWM0NTtcbiAgfVxuXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtY2xpZW50LWljb24sXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtaW52b2ljZS1pY29ucyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmIzODhmO1xuICB9XG5cbiAgLmN1c3RvbS1pY29uLWRhc2hib2FyZC1jbGllbnQtaWNvbjpiZWZvcmUsXG4gIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtaW52b2ljZS1pY29uczpiZWZvcmUge1xuICAgIGNvbG9yOiAjMmIzODhmO1xuICB9XG59XG5cbi5hdmF0YXItaWNvbntcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuaW9uLWxhYmVsID4gcHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5teWRhc2h7XG4gIGJhY2tncm91bmQ6ICMzNzNCNDQ7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJiMzg4ZiwgIzJiMmQzMyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmIzODhmLCAjMmIyZDMzKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuLmNhcmR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwwLjMpLDBweCAtNHB4IDE1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGltZ3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgJiBpb24taWNvbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgJi5zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZWMyNTQ7XG4gIH1cbiAgJi53YXJuaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTljNDU7XG4gIH1cbiAgJi5kYW5nZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmMjUzMTtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgJjpsYXN0LW9mLXR5cGV7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICB9XG59XG5pb24tdGl0bGV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5saXN0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzMzM7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHNwYW57XG4gICAgYmFja2dyb3VuZDogI2YwNDE0MTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICB9XG59XG5cbi5weS1tZHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4uZGFzaC10aW1le1xuICBiYWNrZ3JvdW5kOiAjMzczQjQ0OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyYjM4OGYsICMyYjJkMzMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJiMzg4ZiwgIzJiMmQzMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC50aW1le1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5kYXRle1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi5md2J7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtZGF0YS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQtYXJlYSB7XG4gIHRvcDogLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY29sIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uZGFzaGJvYXJkLWNvbDpudGgtb2YtdHlwZShldmVuKSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC13aWRnZXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtYW1vdW50IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmRhc2gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJsdWVzLW5hdiB7XG4gIC0tYmFja2dyb3VuZDogIzJiMzg4Zjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4ubmF2LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wdG4tYnRuIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC13aWRnZXQtaWNvbiBmYS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGFzaC13aWRnZXQtaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1wcm9qZWN0LWljb24sXG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWVtcGxveWVlLWljb25zIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmU5YzQ1O1xufVxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1wcm9qZWN0LWljb246YmVmb3JlLFxuLmRhc2gtd2lkZ2V0LWljb24gLmN1c3RvbS1pY29uLWRhc2hib2FyZC1lbXBsb3llZS1pY29uczpiZWZvcmUge1xuICBjb2xvcjogI2ZlOWM0NTtcbn1cbi5kYXNoLXdpZGdldC1pY29uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtY2xpZW50LWljb24sXG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWludm9pY2UtaWNvbnMge1xuICBib3JkZXItY29sb3I6ICMyYjM4OGY7XG59XG4uZGFzaC13aWRnZXQtaWNvbiAuY3VzdG9tLWljb24tZGFzaGJvYXJkLWNsaWVudC1pY29uOmJlZm9yZSxcbi5kYXNoLXdpZGdldC1pY29uIC5jdXN0b20taWNvbi1kYXNoYm9hcmQtaW52b2ljZS1pY29uczpiZWZvcmUge1xuICBjb2xvcjogIzJiMzg4Zjtcbn1cblxuLmF2YXRhci1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuaW9uLWxhYmVsID4gcCB7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubXlkYXNoIHtcbiAgYmFja2dyb3VuZDogIzM3M0I0NDtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyYjM4OGYsICMyYjJkMzMpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmIzODhmLCAjMmIyZDMzKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggLTRweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNhcmQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNhcmQuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWMyNTQ7XG59XG4uY2FyZC53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlOWM0NTtcbn1cbi5jYXJkLmRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjI1MzE7XG59XG4uY2FyZCBwIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNhcmQgcDpsYXN0LW9mLXR5cGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saXN0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMzMzO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FyZC1oZWFkZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmMDQxNDE7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLnB5LW1kIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4uZGFzaC10aW1lIHtcbiAgYmFja2dyb3VuZDogIzM3M0I0NDtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyYjM4OGYsICMyYjJkMzMpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmIzODhmLCAjMmIyZDMzKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kYXNoLXRpbWUgLnRpbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uZGFzaC10aW1lIC5kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZndiIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");











var HomePage = /** @class */ (function () {
    function HomePage(navController, utilservice, http, alertController, loadingController, router, authService) {
        var _this = this;
        this.navController = navController;
        this.utilservice = utilservice;
        this.http = http;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.authService = authService;
        this.syncDriverInfo = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var userLogin;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem("userLogin")];
                    case 1:
                        userLogin = _a.sent();
                        console.log(JSON.parse(userLogin)["access_token"]);
                        this.http
                            .get(this.utilservice.baseURL + "api/DriverJob/GetDriverInfo", {
                            headers: {
                                Accept: "application/json",
                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                            },
                        })
                            .toPromise()
                            .then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert_1;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!val.success) return [3 /*break*/, 1];
                                        this.utilservice.driverInfo = val;
                                        console.log(this.utilservice.driverInfo);
                                        return [3 /*break*/, 6];
                                    case 1:
                                        this.utilservice.driverInfo = val;
                                        console.log(this.utilservice.driverInfo);
                                        return [4 /*yield*/, this.alertController.create({
                                                cssClass: "my-custom-class",
                                                header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
                                                subHeader: val.message,
                                                buttons: ["ตกลง"],
                                            })];
                                    case 2:
                                        alert_1 = _a.sent();
                                        return [4 /*yield*/, alert_1.present()];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, localStorage.clear()];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.navController.navigateRoot("/login")];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); };
        this.downloadMyJob = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var userLogin;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('downloadmyjob');
                        return [4 /*yield*/, localStorage.getItem("userLogin")];
                    case 1:
                        userLogin = _a.sent();
                        this.http.get(this.utilservice.baseURL + "api/TokenValidate", {
                            headers: {
                                Accept: "application/json",
                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                            },
                        })
                            .toPromise().then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var loading;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.loadingController.create({
                                            cssClass: "my-custom-class",
                                            message: "กำลังโหลดงานของฉัน...",
                                        })];
                                    case 1:
                                        loading = _a.sent();
                                        return [4 /*yield*/, loading.present()];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.utilservice.delay(1000)];
                                    case 3:
                                        _a.sent();
                                        this.http
                                            .get(this.utilservice.baseURL + "api/DriverJob/GetDriverJobs", {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                                            },
                                        })
                                            .toPromise()
                                            .then(function (val) {
                                            _this.utilservice.jobList = [];
                                            if (val) {
                                                _this.utilservice.servicedropcount = 0;
                                                _this.utilservice.serviceordercount = 0;
                                                _this.utilservice.jobList = val;
                                                console.log(val);
                                                _this.utilservice.servicedropcount = _this.utilservice.jobList.length;
                                                for (var i = 0; i < _this.utilservice.jobList.length; i++) {
                                                    for (var j = 0; j < _this.utilservice.jobList[i].orders.length; j++) {
                                                        _this.utilservice.serviceordercount = _this.utilservice.serviceordercount + 1;
                                                    }
                                                }
                                            }
                                            else {
                                                _this.utilservice.servicedropcount = 0;
                                                _this.utilservice.serviceordercount = 0;
                                            }
                                        })
                                            .catch(function (reason) {
                                            _this.utilservice.jobList = [];
                                        })
                                            .finally(function () {
                                            loading.dismiss();
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (reason) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('[Home] TokenValidate failed, attempting re-login...', reason);
                                        return [4 /*yield*/, this.authService.handleTokenError()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); };
        this.doRefresh = function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.downloadMyJob()];
                    case 1:
                        _a.sent();
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        }); };
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fab"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["far"]);
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(localStorage.getItem('userLogin') == null)) return [3 /*break*/, 1];
                        localStorage.clear();
                        this.navController.navigateRoot("/login");
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.downloadMyJob()];
                    case 2:
                        _a.sent();
                        // document.getElementById("downmyjob").click()
                        return [4 /*yield*/, this.syncDriverInfo()];
                    case 3:
                        // document.getElementById("downmyjob").click()
                        _a.sent();
                        return [4 /*yield*/, this.utilservice.requestGPSPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.Getjob = function () {
        this.router.navigate(["/getjob"]);
    };
    HomePage.prototype.Deliver = function () {
        this.router.navigate(["/deliver"]);
    };
    HomePage.prototype.DeliverFinish = function () {
        this.router.navigate(["/deliver-history"]);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map