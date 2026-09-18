(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"blues-nav\">\n    <ion-buttons slot=\"start\" class=\"nav-content\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ตั้งค่า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"pd-5\">\n    <ion-row>\n      <div class=\"box-card-profile\" (click)=\"selectImage()\">\n        <div class=\"relative\">\n          <div class=\"position-img\">\n            <div class=\"circlr-img-avatar\">\n              <ion-img src=\"{{utilservice.driverInfo.image}}\"></ion-img>\n            </div>\n            <div class=\"btn-change-camera\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"detail-profile\">\n          <h3 class=\"text-info\">\n            ชื่อ:{{ utilservice.driverInfo.firstName }} {{\n            utilservice.driverInfo.lastName }}\n          </h3>\n          <span>แก้ไขข้อมูลส่วนตัว</span>\n        </div>\n      </div>\n\n      <div class=\"mt-5\">\n        <div class=\"list-profile\">\n          <div class=\"item-profile\">\n            <ion-item>\n              <ion-label position=\"stacked\">เบอร์มือถือ</ion-label>\n              <ion-input type=\"number\" value=\"{{utilservice.driverInfo.mobile}}\" [(ngModel)] = \"changePhoneProfle\" (input)=\"checkEventPhone()\"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n        <div class=\"list-profile\">\n          <div class=\"item-profile\">\n            <ion-item>\n              <ion-label position=\"stacked\">ทะเบียนรถ</ion-label>\n              <ion-input   type=\"text\"  value=\"{{utilservice.driverInfo.carNumber}}\"  [(ngModel)] = \"changeCarNumber\" (input)=\"checkEventCarNumber()\"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n        <div class=\"list-profile\">\n          <div class=\"item-profile\">\n            <ion-item>\n              <ion-label position=\"stacked\">เปลียนรหัสผ่าน</ion-label>\n              <ion-button\n                color=\"primary\"\n                style=\"margin-top: 10px; margin-bottom: 10px\"\n                (click)='openModalRepass()'\n                >เปลียนรหัสผ่าน</ion-button\n              >\n            </ion-item>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"danger\" size=\"large\" (click)=\"Home()\">\n          ปิด\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button\n          expand=\"full\"\n          color=\"primary\"\n          size=\"large\"\n          (click)=\"SaveProfile()\"\n          [disabled]=\"this.checkDisable\"\n        >\n          บันทึก\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #2b388f;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.blues-nav {\n  --background: #2b388f;\n}\n\nion-content {\n  --ion-background-color:#eee;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n.search_input {\n  background: #eee;\n}\n\n.fs-30 {\n  font-size: 30px;\n}\n\nion-input.searchBtn {\n  padding-left: 1rem !important;\n}\n\n.bg-blue {\n  background: #2b388f;\n}\n\n.card-container {\n  display: -webkit-box;\n  display: flex;\n  background: #2b388f;\n  width: 100%;\n  height: 70px;\n}\n\n.card-summary {\n  width: 50%;\n  background: #fff;\n  margin: 0.5rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.card-summary img {\n  margin-right: 0.7rem;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n  font-size: 14px;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #2b388e;\n  color: #fff;\n  padding: 1rem;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0;\n  border-bottom: 1px solid #fff;\n}\n\n.hr {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;\n}\n\n.position-img {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.circlr-img-avatar {\n  background: #fff;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  border: 5px solid #fff;\n}\n\n.circlr-img-avatar img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.box-card-profile {\n  position: relative;\n  width: 100%;\n  background: #fff;\n  border-bottom: 5px solid #2b388f;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 3rem;\n  padding-top: 4rem;\n  padding-bottom: 2rem;\n}\n\n.text-info {\n  color: #2b388e;\n}\n\n.pd-5 {\n  padding: 2rem 2rem;\n}\n\n.mt-5 {\n  margin-top: 1rem;\n}\n\n.list-profile {\n  border-left: 5px solid #2b388f;\n  background: #fff;\n  border-radius: 2px;\n  margin-top: 0.5rem;\n  padding: 1rem 0;\n}\n\nion-input {\n  color: #2b388f !important;\n  font-weight: bold;\n  background: #f3f2f2;\n  margin-top: 1rem;\n  padding-left: 10px !important;\n}\n\nion-label {\n  font-size: 20px !important;\n}\n\n.btn-change-camera {\n  position: absolute;\n  bottom: 0;\n  margin-top: -90px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 999;\n  background: #2b388e;\n  padding: 0.3rem;\n  color: #fff;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsOENBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLGlDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLDZCQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQkFBQTtBQ0dGOztBREFFO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0FDR0o7O0FERkk7RUFDRSxvQkFBQTtBQ0lOOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FDQ0E7O0FEQ0E7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRUE7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsMEJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1kYXRhLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICBoZWlnaHQ6IDE0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmJhY2tncm91bmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2UyZTJlMiAhaW1wb3J0YW50O1xufVxuXG4uYmx1ZXMtbmF2IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmIzODhmO1xufVxuaW9uLWNvbnRlbnR7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZTtcbn1cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLm5hdi1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcHRuLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gZmEtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaF9pbnB1dHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmZzLTMwe1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pbnB1dC5zZWFyY2hCdG57XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYmctYmx1ZXtcbiAgYmFja2dyb3VuZDogIzJiMzg4Zjtcbn1cbi5jYXJke1xuICAmLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG4gICYtc3VtbWFyeXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBpbWd7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgIH1cbiAgfVxufVxuXG5cbi5oZWFkZXIgLmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG5cbi5oZWFkZXItdGV4dHtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5iYWNrZ3JvdW5kOiAjMmIzODhlO1xuY29sb3I6ICNmZmY7XG5wYWRkaW5nOiAxcmVtO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1hcmdpbjogMDtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuLmhyIHtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xubWFyZ2luOiAxMHB4IDA7XG53aWR0aDogMTAwJTtcbn1cblxuLnBvc2l0aW9uLWltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmNpcmNsci1pbWctYXZhdGFye1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG59XG5cbi5jaXJjbHItaW1nLWF2YXRhciBpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJveC1jYXJkLXByb2ZpbGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMmIzODhmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4udGV4dC1pbmZve1xuICBjb2xvcjogIzJiMzg4ZTtcbn1cblxuLnBkLTV7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcbn1cblxuLm10LTV7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5saXN0LXByb2ZpbGV7XG4gIGJvcmRlci1sZWZ0OjVweCBzb2xpZCAjMmIzODhmO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbmlvbi1pbnB1dHtcbiAgY29sb3I6ICMyYjM4OGYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MiwgMjQyKTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY2hhbmdlLWNhbWVyYXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjMmIzODhlO1xuICBwYWRkaW5nOiAuM3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iLCIuaG9tZS1kYXRhLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWNhcmQtZGl2IHtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XG59XG5cbi5ibHVlcy1uYXYge1xuICAtLWJhY2tncm91bmQ6ICMyYjM4OGY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5uYXYtY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3B0bi1idG4ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLXdpZGdldC1pY29uIGZhLWljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2hfaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4uZnMtMzAge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pbnB1dC5zZWFyY2hCdG4ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbn1cbi5jYXJkLXN1bW1hcnkge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQtc3VtbWFyeSBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbn1cblxuLmhlYWRlciAuY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3NpdGlvbi1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4uY2lyY2xyLWltZy1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG59XG5cbi5jaXJjbHItaW1nLWF2YXRhciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5ib3gtY2FyZC1wcm9maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyYjM4OGY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi50ZXh0LWluZm8ge1xuICBjb2xvcjogIzJiMzg4ZTtcbn1cblxuLnBkLTUge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG59XG5cbi5tdC01IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmxpc3QtcHJvZmlsZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzJiMzg4ZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICMyYjM4OGYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICNmM2YyZjI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jaGFuZ2UtY2FtZXJhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjMmIzODhlO1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _repassword_modal_repassword_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../repassword-modal/repassword-modal.page */ "./src/app/repassword-modal/repassword-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");









let EditProfilePage = class EditProfilePage {
    constructor(utilservice, navController, http, alertController, loadingController, router, modalCtrl, actionSheetController, camera, file) {
        this.utilservice = utilservice;
        this.navController = navController;
        this.http = http;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.file = file;
        this.changeImgProfile = [];
        this.checkDisable = true;
        this.syncDriverInfo = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userLogin = yield localStorage.getItem("userLogin");
            console.log(JSON.parse(userLogin)["access_token"]);
            this.http
                .get(`${this.utilservice.baseURL}api/DriverJob/GetDriverInfo`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                },
            })
                .toPromise()
                .then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (val.success) {
                    this.utilservice.driverInfo = val;
                    console.log(this.utilservice.driverInfo);
                }
                else {
                    this.utilservice.driverInfo = val;
                    console.log(this.utilservice.driverInfo);
                    const alert = yield this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "พบข้อผิดพลาดการลงชื่อเข้าใช้",
                        subHeader: val.message,
                        buttons: ["ตกลง"],
                    });
                    yield alert.present();
                    yield localStorage.clear();
                    yield this.navController.navigateRoot("/login");
                }
            }));
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.syncDriverInfo();
            this.changePhoneProfle = yield this.utilservice.driverInfo.mobile;
            this.changeCarNumber = yield this.utilservice.driverInfo.carNumber;
            this.changeImgProfile[0] = yield this.utilservice.driverInfo.image;
        });
    }
    SaveProfile() {
        console.log(this.changePhoneProfle + ':' + this.changeCarNumber);
    }
    checkEventPhone() {
        if (this.changePhoneProfle !== this.utilservice.driverInfo.mobile) {
            this.checkDisable = false;
        }
        else {
            this.checkDisable = true;
        }
    }
    checkEventCarNumber() {
        if (this.changePhoneProfle !== this.utilservice.driverInfo.carNumber) {
            this.checkDisable = false;
        }
        else {
            this.checkDisable = true;
        }
    }
    pickImage(sourceType) {
        const options = {
            quality: 75,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.changeImgProfile[0] = imageData;
            this.checkDisable = false;
            console.log(this.changeImgProfile[0]);
        }, (err) => {
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
            yield actionSheet.present();
        });
    }
    Home() {
        this.router.navigate(["/home"]);
    }
    openModalRepass() {
        this.modalCtrl
            .create({
            component: _repassword_modal_repassword_modal_page__WEBPACK_IMPORTED_MODULE_1__["RepasswordModalPage"],
        })
            .then((modal) => modal.present());
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-edit-profile",
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es2015.js.map