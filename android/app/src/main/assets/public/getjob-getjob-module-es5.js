(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getjob-getjob-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/getjob/getjob.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getjob/getjob.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"blues-nav\">\n    <ion-buttons slot=\"start\" class=\"nav-content\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>รับงาน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background: #fff\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item class=\"search_input ion-no-padding\">\n          <ion-input\n            class=\"searchBtn\"\n            type=\"text\"\n            placeholder=\"กรอกหมายเลขหรือสแกน\"\n            [(ngModel)]=\"textgetjob\"\n          ></ion-input>\n          <button item-right (click)=\"onGetinfobytext()\" *ngIf=\"textgetjob\">\n            <ion-icon\n              ios=\"ios-add-circle-outline\"\n              md=\"md-add-circle-outline\"\n              class=\"fs-30\"\n            ></ion-icon>\n          </button>\n          <!--   <button\n            item-right\n            (click) = \"startscanning()\"\n            *ngIf=\"!textgetjob\"\n          >\n            <ion-icon\n              ios=\"ios-qr-scanner\"\n              md=\"md-qr-scanner\"\n              class=\"fs-30\"\n            ></ion-icon>\n          </button>-->\n          <button\n            item-right\n            [routerLink]=\"['/getjob-qrscanner']\"\n            *ngIf=\"!textgetjob\"\n          >\n            <ion-icon\n              ios=\"ios-qr-scanner\"\n              md=\"md-qr-scanner\"\n              class=\"fs-30\"\n            ></ion-icon>\n          </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div style=\"margin: 0.3rem\" *ngIf=\"this.utilservice.getjoblist.length !== 0\" hidden>\n    <div class=\"ion-grid\">\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 20px\">\n            จำนวนจุดส่ง : {{this.countdrop}}\n          </ion-text>\n        </ion-col>\n        <ion-col class=\"text-right\">\n          <ion-text style=\"font-size: 20px\">\n            Orders : {{this.countorder}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div style=\"margin: 0.3rem\">\n    <div class=\"ion-grid\">\n      <ion-row hidden>\n        <ion-col>\n          <ion-text style=\"font-size: 20px\">\n            รายการ : {{ this.utilservice.getjoblist.length}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <!-- แสดงจำนวนบิล และ จำนวนสินค้า หลังจากแสกน -->\n  <div class=\"bg-blue\" hidden>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"card-container\">\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/bill.png\" alt=\"\" />\n              จำนวน 4 บิล\n            </div>\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/parcel.png\" alt=\"\" />\n              จำนวน 20 ชิ้น\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- แสดงผลรายการ -->\n  <div\n    *ngIf=\"this.utilservice.getjoblist.length === 0\"\n    class=\"ion-text-center\"\n    style=\"font-size: 20px\"\n  >\n    ไม่มีรายการ\n  </div>\n\n  <div\n    *ngFor=\"let d of this.utilservice.getjoblist; let i=index\"\n    class=\"ion-text-wrap\"\n  >\n    <h3 class=\"header-text\">Truck Order : {{d.shipmentId}}</h3>\n    <div class=\"ion-grid\">\n      <ion-row>\n        <ion-col> จาก : {{d.from}} </ion-col>\n        <ion-col> ไปยัง : {{d.to}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col> วันที่รับสินค้า : {{d.etd}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <!-- <ion-col> Remark </ion-col>\n          <ion-col>\n            <ion-button size=\"small\" color=\"primary\" (click)=\"openModal(i)\">\n              <fa-icon icon=\"eye\"></fa-icon> </ion-button\n          ></ion-col> -->\n        <ion-col>\n          Order &nbsp;\n          <ion-button size=\"small\" color=\"primary\" (click)=\"openOrderModel(i)\">\n            <fa-icon icon=\"eye\"></fa-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"hr\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 offset-3 class=\"ion-text-right\">\n          <ion-button size=\"small\" color=\"danger\" (click)=\"delete_item(i)\">\n            <fa-icon icon=\"times\"></fa-icon> </ion-button\n        ></ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <section class=\"full-width\">\n      <div\n      *ngIf=\"this.utilservice.getjoblist.length === 0\"\n    >\n      <ion-button\n        [routerLink]=\"['/home']\"\n        routerDirection=\"forward\"\n        expand=\"full\"\n        color=\"primary\"\n        size=\"large\"\n        >กลับไปหน้าหลัก&nbsp;\n      </ion-button>\n    </div>\n      <ion-button\n        expand=\"full\"\n        color=\"success\"\n        (click)=\"submit_deliver();\"\n        [hidden]=\"!this.utilservice.getjoblist.length\"\n        size=\"large\"\n        >ยืนยันการรับงาน\n      </ion-button>\n    </section>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/getjob/getjob.module.ts":
/*!*****************************************!*\
  !*** ./src/app/getjob/getjob.module.ts ***!
  \*****************************************/
/*! exports provided: GetjobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetjobPageModule", function() { return GetjobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _getjob_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getjob.page */ "./src/app/getjob/getjob.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var GetjobPageModule = /** @class */ (function () {
    function GetjobPageModule() {
    }
    GetjobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _getjob_page__WEBPACK_IMPORTED_MODULE_5__["GetjobPage"]
                    }
                ])
            ],
            declarations: [_getjob_page__WEBPACK_IMPORTED_MODULE_5__["GetjobPage"]],
        })
    ], GetjobPageModule);
    return GetjobPageModule;
}());



/***/ }),

/***/ "./src/app/getjob/getjob.page.scss":
/*!*****************************************!*\
  !*** ./src/app/getjob/getjob.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #2b388f;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.blues-nav {\n  --background: #2b388f;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n.search_input {\n  background: #eee;\n}\n\n.fs-30 {\n  font-size: 30px;\n}\n\nion-input.searchBtn {\n  padding-left: 1rem !important;\n}\n\n.bg-blue {\n  background: #2b388f;\n}\n\n.card-container {\n  display: -webkit-box;\n  display: flex;\n  background: #2b388f;\n  width: 100%;\n  height: 70px;\n}\n\n.card-summary {\n  width: 50%;\n  background: #fff;\n  margin: 0.5rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.card-summary img {\n  margin-right: 0.7rem;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n  font-size: 14px;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #2b388e;\n  color: #fff;\n  padding: 1rem;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0;\n  border-bottom: 1px solid #fff;\n}\n\n.hr {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;\n}\n\n.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL2dldGpvYi9nZXRqb2IucGFnZS5zY3NzIiwic3JjL2FwcC9nZXRqb2IvZ2V0am9iLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NOOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0NBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSw4Q0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsaUNBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsNkJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUk7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUNDTjs7QURBTTtFQUNFLG9CQUFBO0FDRVI7O0FESUE7RUFDSSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksNEJBQUE7QUNESjs7QURJQTtFQUNJLDZCQUFBO0FDREo7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUNERjs7QURHQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9nZXRqb2IvZ2V0am9iLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmhvbWUtZGF0YS1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5wcm9maWxlLWNhcmQtZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5ob21lLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmhvbWUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE0NHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICAuYmFja2dyb3VuZC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ibHVlcy1uYXYge1xuICAgIC0tYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbiAgXG4gIC5uYXYtY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5vcHRuLWJ0biB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIFxuICAuaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kYXNoLXdpZGdldC1pY29uIGZhLWljb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIFxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnNlYXJjaF9pbnB1dHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG5cbiAgLmZzLTMwe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIGlvbi1pbnB1dC5zZWFyY2hCdG57XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmctYmx1ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xuICB9XG4gIC5jYXJke1xuICAgICYtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbiAgICAmLXN1bW1hcnl7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDEwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBpbWd7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjdyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLmhlYWRlciAuY29sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcbn1cblxuLmNvbCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xufVxuXG4uaGVhZGVyLXRleHR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG4uaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRleHQtcmlnaHR7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5ob21lLWRhdGEtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xuICBoZWlnaHQ6IDI4MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcbn1cblxuLmJsdWVzLW5hdiB7XG4gIC0tYmFja2dyb3VuZDogIzJiMzg4Zjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4ubmF2LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wdG4tYnRuIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC13aWRnZXQtaWNvbiBmYS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoX2lucHV0IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmZzLTMwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24taW5wdXQuc2VhcmNoQnRuIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzJiMzg4Zjtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uY2FyZC1zdW1tYXJ5IHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jYXJkLXN1bW1hcnkgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG59XG5cbi5oZWFkZXIgLmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmNvbCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMyYjM4OGU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/getjob/getjob.page.ts":
/*!***************************************!*\
  !*** ./src/app/getjob/getjob.page.ts ***!
  \***************************************/
/*! exports provided: GetjobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetjobPage", function() { return GetjobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _order_model_order_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../order-model/order-model.page */ "./src/app/order-model/order-model.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _remark_modal_remark_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../remark-modal/remark-modal.page */ "./src/app/remark-modal/remark-modal.page.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");











var GetjobPage = /** @class */ (function () {
    function GetjobPage(camera, alertContrl, navController, modalCtrl, route, loadingController, utilservice, http, router, platform, qr, authService) {
        var _this = this;
        this.camera = camera;
        this.alertContrl = alertContrl;
        this.navController = navController;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.loadingController = loadingController;
        this.utilservice = utilservice;
        this.http = http;
        this.router = router;
        this.platform = platform;
        this.qr = qr;
        this.authService = authService;
        this.countdrop = '0';
        this.countorder = '0';
        this.onGetinfobytext = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var userLogin, loading, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem("userLogin")];
                    case 1:
                        userLogin = _a.sent();
                        return [4 /*yield*/, this.loadingController.create({
                                cssClass: "my-custom-class",
                                message: "กำลังโหลดข้อมูลพัสดุ...",
                            })];
                    case 2:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 3:
                        _a.sent();
                        body = {
                            shipmentIds: [this.textgetjob],
                            lat: "" + this.utilservice.locationData.latitude,
                            lng: "" + this.utilservice.locationData.longitude,
                        };
                        console.log(body);
                        this.http
                            .post(this.utilservice.baseURL + "api/DriverJob/GetJobsInfo", body, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                            },
                        })
                            .toPromise()
                            .then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert_1, alert_2, confirm_1;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(val);
                                        if (!(val.length == undefined)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.alertContrl.create({
                                                cssClass: "my-custom-class",
                                                message: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E31\u0E2A\u0E14\u0E38",
                                                buttons: ["ตกลง"],
                                            })];
                                    case 1:
                                        alert_1 = _a.sent();
                                        return [4 /*yield*/, alert_1.present()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 6];
                                    case 3:
                                        if (!(val.length == 0)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.alertContrl.create({
                                                cssClass: "my-custom-class",
                                                message: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E31\u0E2A\u0E14\u0E38",
                                                buttons: ["ตกลง"],
                                            })];
                                    case 4:
                                        alert_2 = _a.sent();
                                        return [4 /*yield*/, alert_2.present()];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        if (!val[0].shipmentId_dulicate) return [3 /*break*/, 9];
                                        return [4 /*yield*/, this.alertContrl.create({
                                                header: "แจ้งเตือน",
                                                message: "" + val[0].message,
                                                buttons: [
                                                    {
                                                        text: "ยกเลิก",
                                                        role: "cancel",
                                                        handler: function () { },
                                                    },
                                                    {
                                                        text: "ยืนยัน",
                                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            var _this = this;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0: return [4 /*yield*/, val.forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var alert_3, alert_4;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        if (!(this.utilservice.jobList.filter(function (e) {
                                                                                            return e.invoiceNumber == element.invoiceNumber;
                                                                                        }).length > 0)) return [3 /*break*/, 3];
                                                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                                                cssClass: "my-custom-class",
                                                                                                header: "สแกนซ้ำ",
                                                                                                message: "\u0E1E\u0E31\u0E2A\u0E14\u0E38 #" + element.invoiceNumber + " \u0E2A\u0E41\u0E01\u0E19\u0E41\u0E25\u0E49\u0E27",
                                                                                                buttons: ["ตกลง"],
                                                                                            })];
                                                                                    case 1:
                                                                                        alert_3 = _a.sent();
                                                                                        return [4 /*yield*/, alert_3.present()];
                                                                                    case 2:
                                                                                        _a.sent();
                                                                                        return [3 /*break*/, 7];
                                                                                    case 3:
                                                                                        if (!(this.utilservice.getjoblist.filter(function (e) {
                                                                                            return e.invoiceNumber == element.invoiceNumber;
                                                                                        }).length <= 0)) return [3 /*break*/, 4];
                                                                                        this.utilservice.getjoblist.push(element);
                                                                                        return [3 /*break*/, 7];
                                                                                    case 4: return [4 /*yield*/, this.alertContrl.create({
                                                                                            cssClass: "my-custom-class",
                                                                                            header: "สแกนซ้ำ",
                                                                                            message: "\u0E1E\u0E31\u0E2A\u0E14\u0E38 #" + element.invoiceNumber + " \u0E2A\u0E41\u0E01\u0E19\u0E41\u0E25\u0E49\u0E27",
                                                                                            buttons: ["ตกลง"],
                                                                                        })];
                                                                                    case 5:
                                                                                        alert_4 = _a.sent();
                                                                                        return [4 /*yield*/, alert_4.present()];
                                                                                    case 6:
                                                                                        _a.sent();
                                                                                        _a.label = 7;
                                                                                    case 7: return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); },
                                                    },
                                                ],
                                            })];
                                    case 7:
                                        confirm_1 = _a.sent();
                                        return [4 /*yield*/, confirm_1.present()];
                                    case 8:
                                        _a.sent();
                                        return [3 /*break*/, 10];
                                    case 9:
                                        val.forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var alert_5, alert_6;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(this.utilservice.jobList.filter(function (e) {
                                                            return e.invoiceNumber == element.invoiceNumber;
                                                        }).length > 0)) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                cssClass: "my-custom-class",
                                                                header: "สแกนซ้ำ",
                                                                message: "\u0E1E\u0E31\u0E2A\u0E14\u0E38 #" + element.invoiceNumber + " \u0E2A\u0E41\u0E01\u0E19\u0E41\u0E25\u0E49\u0E27",
                                                                buttons: ["ตกลง"],
                                                            })];
                                                    case 1:
                                                        alert_5 = _a.sent();
                                                        return [4 /*yield*/, alert_5.present()];
                                                    case 2:
                                                        _a.sent();
                                                        return [3 /*break*/, 7];
                                                    case 3:
                                                        if (!(this.utilservice.getjoblist.filter(function (e) {
                                                            return e.invoiceNumber == element.invoiceNumber;
                                                        }).length <= 0)) return [3 /*break*/, 4];
                                                        this.utilservice.getjoblist.push(element);
                                                        return [3 /*break*/, 7];
                                                    case 4: return [4 /*yield*/, this.alertContrl.create({
                                                            cssClass: "my-custom-class",
                                                            header: "สแกนซ้ำ",
                                                            message: "\u0E1E\u0E31\u0E2A\u0E14\u0E38 #" + element.invoiceNumber + " \u0E2A\u0E41\u0E01\u0E19\u0E41\u0E25\u0E49\u0E27",
                                                            buttons: ["ตกลง"],
                                                        })];
                                                    case 5:
                                                        alert_6 = _a.sent();
                                                        return [4 /*yield*/, alert_6.present()];
                                                    case 6:
                                                        _a.sent();
                                                        _a.label = 7;
                                                    case 7: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        _a.label = 10;
                                    case 10: return [2 /*return*/];
                                }
                            });
                        }); })
                            .finally(function () {
                            _this.router.navigate(["/getjob"]);
                            loading.dismiss();
                        });
                        this.textgetjob = "";
                        console.log(this.utilservice.getjoblist);
                        return [2 /*return*/];
                }
            });
        }); };
        this.downloadMyJob = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var userLogin;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem("userLogin")];
                    case 1:
                        userLogin = _a.sent();
                        this.http
                            .get(this.utilservice.baseURL + "api/TokenValidate", {
                            headers: {
                                Accept: "application/json",
                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                            },
                        })
                            .toPromise()
                            .then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // const loading = await this.loadingCtrl.create({
                                    //   cssClass: "my-custom-class",
                                    //   message: "กำลังโหลดงานของฉัน...",
                                    // });
                                    // await loading.present();
                                    return [4 /*yield*/, this.utilservice.delay(1000)];
                                    case 1:
                                        // const loading = await this.loadingCtrl.create({
                                        //   cssClass: "my-custom-class",
                                        //   message: "กำลังโหลดงานของฉัน...",
                                        // });
                                        // await loading.present();
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
                                                _this.utilservice.jobList = val;
                                            }
                                        })
                                            .catch(function (reason) {
                                            _this.utilservice.jobList = [];
                                        })
                                            .finally(function () {
                                            // loading.dismiss();
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (reason) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('[Getjob] TokenValidate failed, attempting re-login...', reason);
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
    }
    GetjobPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userLogin;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.utilservice.requestGPSPermission();
                        console.log(this.utilservice.locationData);
                        return [4 /*yield*/, localStorage.getItem("userLogin")];
                    case 1:
                        userLogin = _a.sent();
                        // this.platform.backButton.subscribeWithPriority(0, () => {
                        //   document.getElementsByTagName("body")[0].style.opacity = "1";
                        //   this.openqrscan.unsubscribe();
                        //   console.log("test");
                        // });
                        this.route.paramMap.subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var loading_1, body;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!val.get("text")) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.loadingController.create({
                                                cssClass: "my-custom-class",
                                                message: "กำลังโหลดข้อมูลพัสดุ...",
                                            })];
                                    case 1:
                                        loading_1 = _a.sent();
                                        return [4 /*yield*/, loading_1.present()];
                                    case 2:
                                        _a.sent();
                                        body = {
                                            shipmentIds: [],
                                        };
                                        // trim whitespace ที่ iOS QR scanner อาจแนบมา
                                        body.shipmentIds = val.get("text").split(",").map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
                                        this.http
                                            .post(this.utilservice.baseURL + "api/DriverJob/GetJobsInfo", JSON.stringify(body), {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                                            },
                                        })
                                            .toPromise()
                                            .then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var alert_7, confirm_2, _loop_1, this_1, _i, val_1, element;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(!val || val.length == undefined || val.length == 0)) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                cssClass: "my-custom-class",
                                                                message: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E31\u0E2A\u0E14\u0E38",
                                                                buttons: ["ตกลง"],
                                                            })];
                                                    case 1:
                                                        alert_7 = _a.sent();
                                                        return [4 /*yield*/, alert_7.present()];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                    case 3:
                                                        if (!val[0].shipmentId_dulicate) return [3 /*break*/, 6];
                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                header: "แจ้งเตือน",
                                                                message: "" + val[0].message,
                                                                buttons: [
                                                                    {
                                                                        text: "ยกเลิก",
                                                                        role: "cancel",
                                                                        handler: function () { },
                                                                    },
                                                                    {
                                                                        text: "ยืนยัน",
                                                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var _loop_2, this_2, _i, val_2, element;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        _loop_2 = function (element) {
                                                                                            var alert_8;
                                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                switch (_a.label) {
                                                                                                    case 0:
                                                                                                        if (!(this_2.utilservice.jobList.filter(function (e) {
                                                                                                            return e.invoiceNumber == element.invoiceNumber;
                                                                                                        }).length > 0)) return [3 /*break*/, 3];
                                                                                                        return [4 /*yield*/, this_2.alertContrl.create({
                                                                                                                cssClass: "my-custom-class",
                                                                                                                header: "สแกนซ้ำ",
                                                                                                                message: "\u0E1E\u0E31\u0E2A\u0E14\u0E38 #" + element.invoiceNumber + " \u0E2A\u0E41\u0E01\u0E19\u0E41\u0E25\u0E49\u0E27",
                                                                                                                buttons: ["ตกลง"],
                                                                                                            })];
                                                                                                    case 1:
                                                                                                        alert_8 = _a.sent();
                                                                                                        return [4 /*yield*/, alert_8.present()];
                                                                                                    case 2:
                                                                                                        _a.sent();
                                                                                                        return [3 /*break*/, 4];
                                                                                                    case 3:
                                                                                                        if (this_2.utilservice.getjoblist.filter(function (e) {
                                                                                                            return e.invoiceNumber == element.invoiceNumber;
                                                                                                        }).length <= 0) {
                                                                                                            this_2.utilservice.getjoblist.push(element);
                                                                                                        }
                                                                                                        _a.label = 4;
                                                                                                    case 4: return [2 /*return*/];
                                                                                                }
                                                                                            });
                                                                                        };
                                                                                        this_2 = this;
                                                                                        _i = 0, val_2 = val;
                                                                                        _a.label = 1;
                                                                                    case 1:
                                                                                        if (!(_i < val_2.length)) return [3 /*break*/, 4];
                                                                                        element = val_2[_i];
                                                                                        return [5 /*yield**/, _loop_2(element)];
                                                                                    case 2:
                                                                                        _a.sent();
                                                                                        _a.label = 3;
                                                                                    case 3:
                                                                                        _i++;
                                                                                        return [3 /*break*/, 1];
                                                                                    case 4: return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); },
                                                                    },
                                                                ],
                                                            })];
                                                    case 4:
                                                        confirm_2 = _a.sent();
                                                        console.log('3');
                                                        return [4 /*yield*/, confirm_2.present()];
                                                    case 5:
                                                        _a.sent();
                                                        return [3 /*break*/, 10];
                                                    case 6:
                                                        _loop_1 = function (element) {
                                                            var alert_9;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        if (!(this_1.utilservice.jobList.filter(function (e) {
                                                                            return e.invoiceNumber == element.invoiceNumber;
                                                                        }).length > 0)) return [3 /*break*/, 3];
                                                                        return [4 /*yield*/, this_1.alertContrl.create({
                                                                                cssClass: "my-custom-class",
                                                                                header: "สแกนซ้ำ",
                                                                                message: "\u0E1E\u0E31\u0E2A\u0E14\u0E38 #" + element.invoiceNumber + " \u0E2A\u0E41\u0E01\u0E19\u0E41\u0E25\u0E49\u0E27",
                                                                                buttons: ["ตกลง"],
                                                                            })];
                                                                    case 1:
                                                                        alert_9 = _a.sent();
                                                                        return [4 /*yield*/, alert_9.present()];
                                                                    case 2:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 4];
                                                                    case 3:
                                                                        if (this_1.utilservice.getjoblist.filter(function (e) {
                                                                            return e.invoiceNumber == element.invoiceNumber;
                                                                        }).length <= 0) {
                                                                            this_1.utilservice.getjoblist.push(element);
                                                                        }
                                                                        _a.label = 4;
                                                                    case 4: return [2 /*return*/];
                                                                }
                                                            });
                                                        };
                                                        this_1 = this;
                                                        _i = 0, val_1 = val;
                                                        _a.label = 7;
                                                    case 7:
                                                        if (!(_i < val_1.length)) return [3 /*break*/, 10];
                                                        element = val_1[_i];
                                                        return [5 /*yield**/, _loop_1(element)];
                                                    case 8:
                                                        _a.sent();
                                                        _a.label = 9;
                                                    case 9:
                                                        _i++;
                                                        return [3 /*break*/, 7];
                                                    case 10:
                                                        console.log('getjoblist after push:', this.utilservice.getjoblist);
                                                        // reassign เพื่อ trigger Angular change detection ให้ view อัปเดตทันที
                                                        this.utilservice.getjoblist = this.utilservice.getjoblist.slice();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })
                                            .catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var alert;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.error('[GetJobsInfo] error:', err);
                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                cssClass: "my-custom-class",
                                                                header: "ผิดพลาด",
                                                                message: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E31\u0E2A\u0E14\u0E38\u0E44\u0E14\u0E49 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
                                                                buttons: ["ตกลง"],
                                                            })];
                                                    case 1:
                                                        alert = _a.sent();
                                                        return [4 /*yield*/, alert.present()];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })
                                            .finally(function () {
                                            loading_1.dismiss();
                                        });
                                        console.log(this.utilservice.getjoblist);
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    GetjobPage.prototype.ngOnDestroy = function () { };
    GetjobPage.prototype.delete_item = function (dataIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var confirm;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertContrl.create({
                                        header: "ยืนยันการลบ",
                                        message: "คุณต้องการลบหรือไม่",
                                        backdropDismiss: false,
                                        buttons: [
                                            {
                                                text: "ยกเลิก",
                                                role: "cancel",
                                                handler: function () {
                                                    return resolve(false);
                                                },
                                            },
                                            {
                                                text: "ตกลง",
                                                handler: function () {
                                                    _this.utilservice.getjoblist.splice(dataIndex, 1);
                                                    console.log(_this.utilservice.getjoblist);
                                                },
                                            },
                                        ],
                                    })];
                                case 1:
                                    confirm = _a.sent();
                                    return [4 /*yield*/, confirm.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    GetjobPage.prototype.submit_deliver = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userLogin;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem("userLogin")];
                    case 1:
                        userLogin = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var confirm;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertContrl.create({
                                                header: "ยืนยันการรับงาน",
                                                message: "กดเพื่อยืนยันการรับงาน",
                                                backdropDismiss: false,
                                                buttons: [
                                                    {
                                                        text: "ยกเลิก",
                                                        role: "cancel",
                                                        handler: function () {
                                                            return resolve(false);
                                                        },
                                                    },
                                                    {
                                                        text: "ตกลง",
                                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            var loading, body, alert_10;
                                                            var _this = this;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0: return [4 /*yield*/, this.loadingController.create({
                                                                            cssClass: "my-custom-class",
                                                                            message: "กำลังยืนยันการรับงาน...",
                                                                        })];
                                                                    case 1:
                                                                        loading = _a.sent();
                                                                        return [4 /*yield*/, loading.present()];
                                                                    case 2:
                                                                        _a.sent();
                                                                        body = {
                                                                            shipmentIds: [],
                                                                            lat: "" + this.utilservice.locationData.latitude,
                                                                            lng: "" + this.utilservice.locationData.longitude,
                                                                        };
                                                                        this.utilservice.getjoblist.forEach(function (el) {
                                                                            body.shipmentIds.push(el.shipmentId);
                                                                        });
                                                                        if (!(body.shipmentIds.length == 0)) return [3 /*break*/, 6];
                                                                        return [4 /*yield*/, loading.dismiss()];
                                                                    case 3:
                                                                        _a.sent();
                                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                                cssClass: "my-custom-class",
                                                                                header: "ผิดพลาด",
                                                                                message: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2A\u0E41\u0E01\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
                                                                                buttons: ["ตกลง"],
                                                                            })];
                                                                    case 4:
                                                                        alert_10 = _a.sent();
                                                                        return [4 /*yield*/, alert_10.present()];
                                                                    case 5:
                                                                        _a.sent();
                                                                        return [3 /*break*/, 7];
                                                                    case 6:
                                                                        console.log(JSON.stringify(body));
                                                                        this.http
                                                                            .post(this.utilservice.baseURL + "api/DriverJob/SaveDriverJobs", JSON.stringify(body), {
                                                                            headers: {
                                                                                "Content-Type": "application/json",
                                                                                Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                                                                            },
                                                                        })
                                                                            .toPromise()
                                                                            .then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var datagetjob, alert_11;
                                                                            var _this = this;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        datagetjob = {};
                                                                                        datagetjob = val;
                                                                                        console.log(datagetjob);
                                                                                        if (!datagetjob.success) return [3 /*break*/, 3];
                                                                                        return [4 /*yield*/, this.alertContrl.create({
                                                                                                cssClass: "my-custom-class",
                                                                                                header: "สำเร็จ",
                                                                                                backdropDismiss: false,
                                                                                                message: "" + datagetjob.message,
                                                                                                buttons: [{
                                                                                                        text: 'ตกลง', handler: function () {
                                                                                                            // this.navController.navigateForward("/getjob");
                                                                                                            _this.router.navigate(["/deliver-history"]);
                                                                                                            datagetjob = {};
                                                                                                            _this.utilservice.getjoblist = [];
                                                                                                            _this.downloadMyJob();
                                                                                                        }
                                                                                                    }],
                                                                                            })];
                                                                                    case 1:
                                                                                        alert_11 = _a.sent();
                                                                                        return [4 /*yield*/, alert_11.present()];
                                                                                    case 2:
                                                                                        _a.sent();
                                                                                        _a.label = 3;
                                                                                    case 3: return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })
                                                                            .finally(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        this.utilservice.getjoblist = [];
                                                                                        this.downloadMyJob();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); });
                                                                        _a.label = 7;
                                                                    case 7: return [2 /*return*/];
                                                                }
                                                            });
                                                        }); },
                                                    },
                                                ],
                                            })];
                                        case 1:
                                            confirm = _a.sent();
                                            return [4 /*yield*/, confirm.present()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    GetjobPage.prototype.openModal = function (index) {
        this.modalCtrl
            .create({
            component: _remark_modal_remark_modal_page__WEBPACK_IMPORTED_MODULE_9__["RemarkModalPage"],
            componentProps: {
                remark: this.utilservice.getjoblist[index].remark,
            },
        })
            .then(function (modal) { return modal.present(); });
    };
    GetjobPage.prototype.openOrderModel = function (index) {
        this.modalCtrl
            .create({
            component: _order_model_order_model_page__WEBPACK_IMPORTED_MODULE_1__["OrderModelPage"],
            componentProps: {
                orders: this.utilservice.getjoblist[index].orders,
            },
        })
            .then(function (modal) { return modal.present(); });
    };
    GetjobPage.prototype.Deliver = function () {
        // this.navController.navigateForward("/deliver");
        this.router.navigate(["/deliver"]);
    };
    GetjobPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["QRScanner"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    GetjobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "app-getjob",
            template: __webpack_require__(/*! raw-loader!./getjob.page.html */ "./node_modules/raw-loader/index.js!./src/app/getjob/getjob.page.html"),
            styles: [__webpack_require__(/*! ./getjob.page.scss */ "./src/app/getjob/getjob.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
            _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["QRScanner"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], GetjobPage);
    return GetjobPage;
}());



/***/ })

}]);
//# sourceMappingURL=getjob-getjob-module-es5.js.map