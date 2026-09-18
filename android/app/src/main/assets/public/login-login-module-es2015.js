(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content style=\"background: #fff\">\n  <div class=\"profile-card-div\">\n    <ion-card class=\"home-card\">\n      <div class=\"home-header\">\n        <img src=\"{{blackLogo}}\" class=\"whiteLogo slide-in logo\">\n      </div>\n    </ion-card>\n  </div>\n  <div class=\"home-data-card\">\n    <div class=\"head-div\">\n      <h2 class=\"login\"> เข้าสู่ระบบ</h2>\n    </div>\n    <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\n      <ion-list class=\"login-box\">\n        <ion-item detail class=\"login-item\">\n          <span slot=\"start\" class=\"custom-icon-personal-info-icon\"></span>\n          <ion-input type=\"text\" class=\"loginInput\" placeholder=\"บัญชีผู้ใช้งาน\" formControlName=\"username\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item detail class=\"login-item\">\n          <span slot=\"start\" class=\"custom-icon-password-icon\"></span>\n          <ion-input [type]=\"showPassword ? 'text' : 'password'\" placeholder=\"รหัสผ่าน\" formControlName=\"password\" required>\n          </ion-input>\n          <ion-icon slot=\"end\" [name]=\"showPassword ? 'md-eye-off' : 'md-eye'\" class=\"eye-icon\" (click)=\"togglePassword()\"></ion-icon>\n        </ion-item>\n\n        <ion-text color=\"danger\">\n          <p [class]=\"show_error_auth\"></p>\n        </ion-text>\n\n        <ion-item lines=\"none\" class=\"remember-item\">\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"rememberMe\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n          <ion-label class=\"remember-label\">จำรหัสผ่าน</ion-label>\n        </ion-item>\n\n        <ion-button expand=\"block\" class=\"loginButton\" type=\"submit\">เข้าสู่ระบบ </ion-button>\n        <!-- <div class=\"register\" (click)=\"register()\">คุณยังไม่มีชื่อผู้ใช้งาน <span>สมัครสมาชิก</span> คลิก</div> -->\n        <div class=\"versionText\">Version {{this.utilservice.numberVersion}}</div>\n\n      </ion-list>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 110px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.forgotPasswordText {\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n}\n\n.forgotPasswordBack {\n  text-align: center;\n  font-size: 16px;\n  color: #2b388f;\n  margin-top: 50px;\n}\n\n.register {\n  text-align: center;\n  font-size: 16px;\n  margin-top: 30px;\n}\n\n.register span {\n  color: #2b388f;\n}\n\n.versionText {\n  text-align: center;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  height: 325px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.head-div {\n  top: -20px;\n  position: relative;\n  font-size: 18px;\n  text-align: center;\n  border-radius: 50px;\n  border: solid 0.1px rgba(255, 255, 255, 0);\n  height: 63px;\n  background: white;\n  margin-left: 30px;\n  /* bottom: 0px; */\n  margin-right: 30px;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.login-item {\n  --padding-start: 0;\n  --detail-icon-color: #2b388f;\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 15px 4px;\n}\n\n.login-item span {\n  font-size: 30px;\n}\n\n.login-item .custom-icon-personal-info-icon:before {\n  color: #2b388f;\n}\n\n.login-box {\n  padding: 30px;\n  padding-top: 0px;\n}\n\n.eye-icon {\n  font-size: 24px;\n  color: #2b388f;\n  cursor: pointer;\n  padding: 8px;\n}\n\n.remember-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n\n.remember-item ion-checkbox {\n  --size: 20px;\n  --checkbox-background-checked: #2b388f;\n  --border-color-checked: #2b388f;\n  margin-right: 10px;\n}\n\n.remember-label {\n  font-size: 14px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBSTtFQUNJLGNBQUE7QUNFUjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDRyxrQkFBQTtFQUNDLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ08sVUFBQTtFQUNILGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FER0k7RUFDSSxjQUFBO0FDRFI7O0FES0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUk7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FDRlI7O0FETUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmZvcmdvdFBhc3N3b3JkVGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3Jnb3RQYXNzd29yZEJhY2sge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMyYjM4OGY7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyYjM4OGY7XG4gICAgfVxufVxuXG4udmVyc2lvblRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaG9tZS1kYXRhLWNhcmQge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICAgIC8vIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gICAgaGVpZ2h0OiAzMjVweDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICAgIGhlaWdodDogMTQ0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5oZWFkLWRpdiB7XG4gICAgICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogc29saWQgMC4xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgLyogYm90dG9tOiAwcHg7ICovXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IC0xcHggN3B4IDE2cHggNnB4IHJnYmEoMjEwLCAyMDgsIDIwNywgMC45NjA3ODQzMTM3KTtcbn1cblxuLmxvZ2luLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiAjMmIzODhmO1xuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIHBhZGRpbmc6IDE1cHggNHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuY3VzdG9tLWljb24tcGVyc29uYWwtaW5mby1pY29uOmJlZm9yZSB7XG4gICAgICAgIGNvbG9yOiAjMmIzODhmO1xuICAgIH1cbn1cblxuLmxvZ2luLWJveCB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uZXllLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzJiMzg4ZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4ucmVtZW1iZXItaXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgIC0tc2l6ZTogMjBweDtcbiAgICAgICAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyYjM4OGY7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMyYjM4OGY7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbi5yZW1lbWJlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjY2O1xufSIsIi5sb2dvIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmZvcmdvdFBhc3N3b3JkVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3Jnb3RQYXNzd29yZEJhY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyYjM4OGY7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnJlZ2lzdGVyIHNwYW4ge1xuICBjb2xvcjogIzJiMzg4Zjtcbn1cblxuLnZlcnNpb25UZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ob21lLWRhdGEtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGhlaWdodDogMzI1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5oZWFkLWRpdiB7XG4gIHRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMC4xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgaGVpZ2h0OiA2M3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIC8qIGJvdHRvbTogMHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDE2cHggNnB4IHJnYmEoMjEwLCAyMDgsIDIwNywgMC45NjA3ODQzMTM3KTtcbn1cblxuLmxvZ2luLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tZGV0YWlsLWljb24tY29sb3I6ICMyYjM4OGY7XG4gIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogMTVweCA0cHg7XG59XG4ubG9naW4taXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmxvZ2luLWl0ZW0gLmN1c3RvbS1pY29uLXBlcnNvbmFsLWluZm8taWNvbjpiZWZvcmUge1xuICBjb2xvcjogIzJiMzg4Zjtcbn1cblxuLmxvZ2luLWJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5leWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyYjM4OGY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucmVtZW1iZXItaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVtZW1iZXItaXRlbSBpb24tY2hlY2tib3gge1xuICAtLXNpemU6IDIwcHg7XG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiAjMmIzODhmO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjMmIzODhmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yZW1lbWJlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/services/permission.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");










let LoginPage = class LoginPage {
    constructor(navCtrl, menuCtrl, fb, statusBar, referenceservice, apiservice, httpClient, loadingController, alertController, utilservice, http, permissionService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.statusBar = statusBar;
        this.referenceservice = referenceservice;
        this.apiservice = apiservice;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.utilservice = utilservice;
        this.http = http;
        this.permissionService = permissionService;
        this.username1 = false;
        this.password1 = false;
        this.show_error_auth = false;
        this.showPassword = false;
        this.rememberMe = false;
        this.keywords = {};
        this.login = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: "my-custom-class",
                message: "กำลังเข้าสู่ระบบ...",
            });
            yield loading.present();
            console.log('LOGIN URL =', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl, 'referenceservice.baseURL =', this.referenceservice.baseURL);
            const url = `${this.referenceservice.baseURL}token`;
            const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]()
                .set('username', this.loginForm.value.username)
                .set('password', this.loginForm.value.password)
                .set('grant_type', 'password');
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            });
            console.log('TOKEN FULL URL =', url);
            console.log('TOKEN BODY =', body.toString());
            this.httpClient
                .post(url, body.toString(), { headers })
                .toPromise()
                .then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (val.access_token) {
                    yield localStorage.setItem("userLogin", JSON.stringify(val));
                    yield localStorage.setItem("loginStatus", "true");
                    // บันทึกข้อมูลจำรหัสผ่าน
                    if (this.rememberMe) {
                        localStorage.setItem('rememberMe', 'true');
                        localStorage.setItem('savedUsername', this.loginForm.value.username);
                        localStorage.setItem('savedPassword', this.loginForm.value.password);
                    }
                    else {
                        localStorage.removeItem('rememberMe');
                        localStorage.removeItem('savedUsername');
                        localStorage.removeItem('savedPassword');
                    }
                    this.navCtrl.navigateRoot("/home");
                }
                else {
                    const alert = yield this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
                        subHeader: "รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
                        buttons: ["ตกลง"],
                    });
                    yield alert.present();
                }
            }))
                .catch((reason) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: "my-custom-class",
                    header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
                    subHeader: "รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
                    buttons: ["ตกลง"],
                });
                yield alert.present();
            }))
                .finally(() => {
                loading.dismiss();
            });
        });
        this.loginForm = fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.utilservice.requestGPSPermission();
            // request camera permission (returns true if granted)
            try {
                yield this.permissionService.requestCameraPermission();
            }
            catch (e) {
                console.warn('camera permission request failed', e);
            }
            this.utilservice.jobList = [];
            this.utilservice.getjoblist = [];
            this.utilservice.completejobList = [];
            this.utilservice.completelist_table = [];
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
        });
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
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _services_permission_service__WEBPACK_IMPORTED_MODULE_6__["PermissionService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _services_permission_service__WEBPACK_IMPORTED_MODULE_6__["PermissionService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/permission.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/permission.service.ts ***!
  \************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");




let PermissionService = class PermissionService {
    constructor(platform, androidPermissions) {
        this.platform = platform;
        this.androidPermissions = androidPermissions;
    }
    // Check camera permission status when possible. Some webviews don't
    // expose a programmatic status; in that case return 'unknown'.
    checkCameraStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // On Android, ask the AndroidPermissions plugin for current camera permission.
            try {
                if (this.platform.is('android')) {
                    const permission = this.androidPermissions.PERMISSION.CAMERA;
                    const result = yield this.androidPermissions.checkPermission(permission);
                    return result.hasPermission ? 'granted' : 'denied';
                }
                // On iOS (WKWebView) the Permissions API is unreliable; return 'unknown'
                // and let QRScanner.prepare() handle the real native permission flow.
                return 'unknown';
            }
            catch (e) {
                return 'unknown';
            }
        });
    }
    // Request camera permission. Sequence recommendation for callers:
    // prepare -> checkCameraStatus/authorized -> show (UI) -> scan
    requestCameraPermission() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.platform.is('android')) {
                    const permission = this.androidPermissions.PERMISSION.CAMERA;
                    const result = yield this.androidPermissions.checkPermission(permission);
                    if (result.hasPermission)
                        return true;
                    const request = yield this.androidPermissions.requestPermission(permission);
                    return request.hasPermission === true;
                }
                // For iOS / WKWebView do NOT use navigator.permissions or getUserMedia.
                // Those are unreliable for native plugins. Instead, use the QRScanner
                // plugin's `prepare()` method from the scanning component, which will
                // perform the correct native permission flow. Here we return true so
                // callers on iOS can proceed to call QRScanner.prepare() themselves.
                return true;
            }
            catch (e) {
                console.warn('requestCameraPermission error', e);
                return false;
            }
        });
    }
    // Convenience: prepare camera for scanning. Call this before showing scanner UI.
    // Returns true if permission is granted or prompt succeeded.
    prepareCameraForScan() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const status = yield this.checkCameraStatus();
            if (this.platform.is('android')) {
                if (status === 'granted')
                    return true;
                return this.requestCameraPermission();
            }
            // On iOS: do NOT try to programmatically request via web APIs here.
            // The scanning component should call `QRScanner.prepare()` which will
            // handle the native permission prompt and camera lifecycle.
            return true;
        });
    }
};
PermissionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"] }
];
PermissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"]])
], PermissionService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map