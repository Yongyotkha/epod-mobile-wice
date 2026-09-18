(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"profile-card-div\">\n    <ion-card class=\"home-card\">\n      <div class=\"home-header\">\n        <img src=\"{{blackLogo}}\" class=\"whiteLogo slide-in logo\">\n      </div>\n    </ion-card>\n  </div>\n\n  <div class=\"home-data-card\">\n    <div class=\"head-div\">\n      <h2 class=\"login\"> สมัครสมาชิก</h2>\n    </div>\n    <ion-list class=\"login-box\">\n      <ion-item detail class=\"login-item\">\n        <ion-input type=\"password\" placeholder=\"ชื่อผู้ใช้\" required>\n        </ion-input>\n      </ion-item>\n      <ion-item detail class=\"login-item\">\n        <ion-input type=\"text\" class=\"loginInput\" placeholder=\"รหัสผ่าน\" required>\n        </ion-input>\n      </ion-item>\n      <ion-item detail class=\"login-item\">\n        <ion-input type=\"password\" placeholder=\"ยืนยันรหัสผ่าน\" required>\n        </ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"register()\" class=\"loginButton\" type=\"submit\">สมัครสมาชิก </ion-button>\n      <h3 class=\"register\" (click)=\"loginPage()\">มีชื่อผู้ใช้งานอยู่แล้วกลับไป <span>เข้าสู่ระบบ</span> คลิก</h3>\n    </ion-list>\n  </div>"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 110px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.forgotPasswordText {\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n}\n\n.forgotPasswordBack {\n  text-align: center;\n  font-size: 16px;\n  color: #2b388f;\n  margin-top: 50px;\n}\n\n.register {\n  text-align: center;\n  font-size: 16px;\n  margin-top: 50px;\n}\n\n.register span {\n  color: #2b388f;\n}\n\n.home-data-card {\n  position: relative;\n  top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  height: 325px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n  padding-top: 50px;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.head-div {\n  top: -20px;\n  position: relative;\n  font-size: 18px;\n  text-align: center;\n  border-radius: 50px;\n  border: solid 0.1px rgba(255, 255, 255, 0);\n  height: 63px;\n  background: white;\n  margin-left: 30px;\n  /* bottom: 0px; */\n  margin-right: 30px;\n  box-shadow: -1px 7px 16px 6px rgba(210, 208, 207, 0.9607843137);\n}\n\n.login-item {\n  --padding-start: 0;\n  --detail-icon-color: #2b388f;\n  --detail-icon-opacity: 1;\n  --inner-padding-end: 0;\n  padding: 15px 4px;\n}\n\n.login-item span {\n  font-size: 30px;\n}\n\n.login-item .custom-icon-personal-info-icon:before {\n  color: #2b388f;\n}\n\n.login-box {\n  padding: 30px;\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBSTtFQUNJLGNBQUE7QUNFUjs7QURFQTtFQUNHLGtCQUFBO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDTyxVQUFBO0VBQ0gsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFSTtFQUNJLGVBQUE7QUNBUjs7QURHSTtFQUNJLGNBQUE7QUNEUjs7QURLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmZvcmdvdFBhc3N3b3JkVGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3Jnb3RQYXNzd29yZEJhY2sge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMyYjM4OGY7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyYjM4OGY7XG4gICAgfVxufVxuXG4uaG9tZS1kYXRhLWNhcmQge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICAgIC8vIGJhY2tncm91bmQ6ICMwQTE1RDU7XG4gICAgaGVpZ2h0OiAzMjVweDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICAgIGhlaWdodDogMTQ0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5oZWFkLWRpdiB7XG4gICAgICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogc29saWQgMC4xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgLyogYm90dG9tOiAwcHg7ICovXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IC0xcHggN3B4IDE2cHggNnB4IHJnYmEoMjEwLCAyMDgsIDIwNywgMC45NjA3ODQzMTM3KTtcbn1cblxuLmxvZ2luLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWRldGFpbC1pY29uLWNvbG9yOiAjMmIzODhmO1xuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIHBhZGRpbmc6IDE1cHggNHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuY3VzdG9tLWljb24tcGVyc29uYWwtaW5mby1pY29uOmJlZm9yZSB7XG4gICAgICAgIGNvbG9yOiAjMmIzODhmO1xuICAgIH1cbn1cblxuLmxvZ2luLWJveCB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufSIsIi5sb2dvIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmZvcmdvdFBhc3N3b3JkVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3Jnb3RQYXNzd29yZEJhY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyYjM4OGY7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnJlZ2lzdGVyIHNwYW4ge1xuICBjb2xvcjogIzJiMzg4Zjtcbn1cblxuLmhvbWUtZGF0YS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWNhcmQtZGl2IHtcbiAgaGVpZ2h0OiAzMjVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICBoZWlnaHQ6IDE0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmhlYWQtZGl2IHtcbiAgdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBoZWlnaHQ6IDYzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgLyogYm90dG9tOiAwcHg7ICovXG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTZweCA2cHggcmdiYSgyMTAsIDIwOCwgMjA3LCAwLjk2MDc4NDMxMzcpO1xufVxuXG4ubG9naW4taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjogIzJiMzg4ZjtcbiAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nOiAxNXB4IDRweDtcbn1cbi5sb2dpbi1pdGVtIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubG9naW4taXRlbSAuY3VzdG9tLWljb24tcGVyc29uYWwtaW5mby1pY29uOmJlZm9yZSB7XG4gIGNvbG9yOiAjMmIzODhmO1xufVxuXG4ubG9naW4tYm94IHtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navContrl, navCtrl, referenceservice) {
        this.navContrl = navContrl;
        this.navCtrl = navCtrl;
        this.referenceservice = referenceservice;
        this.blackLogo = "assets/imgs//wice-logo.png";
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        this.referenceservice.showAlert('Wice Supply Chain', 'Account Successfully Registered!');
        this.navCtrl.pop();
    };
    RegisterPage.prototype.loginPage = function () {
        this.navContrl.navigateRoot("/login");
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map