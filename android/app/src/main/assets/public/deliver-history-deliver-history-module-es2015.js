(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deliver-history-deliver-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/deliver-history/deliver-history.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deliver-history/deliver-history.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"blues-nav\">\n    <ion-buttons slot=\"start\" class=\"nav-content\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>งานของฉัน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"margin: 0.3rem\" *ngIf=\"this.utilservice.jobList.length !== 0\">\n    <div class=\"ion-grid\">\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 20px\">\n            จำนวนจุดส่ง : {{this.countdrop}}\n          </ion-text>\n        </ion-col>\n        <ion-col class=\"text-right\">\n          <ion-text style=\"font-size: 20px\">\n            Orders : {{this.countorder}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf=\"this.utilservice.jobList.length === 0\" class=\"ion-text-center\" style=\"font-size: 20px\">\n    ไม่มีรายการ\n\n  </div>\n\n  <!-- แสดงจำนวนบิล และ จำนวนสินค้า หลังจากแสกน -->\n  <div class=\"bg-blue\" nopadding hidden>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"12\">\n          <div class=\"card-container\">\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/invoiceall.png\" alt=\"\" />\n              บิลทั้งหมด 4 บิล\n            </div>\n\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/invoice.png\" alt=\"\" />\n              บิลที่ส่งได้ 4 บิล\n            </div>\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/waiting.png\" alt=\"\" />\n              บิลรอส่ง 4 บิล\n            </div>\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/fail.png\" alt=\"\" />\n              บิลที่ส่งไม่ได้ 4 บิล\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- แสดงผลรายการ -->\n  <div style=\"margin: 1rem\" hidden>\n    <div class=\"ion-grid\">\n      <ion-row>\n        <ion-col>\n          สถานะ :\n          <span class=\"status success\"></span> ส่งแล้ว\n          <span class=\"status wait\"></span> รอการนำส่ง\n          <span class=\"status fail\"></span> ส่งไม่ได้\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngFor=\"let d of dropnumber; let i=index\" class=\"ion-text-wrap\" [ngClass]=\"{active: isGroupShown(i)}\">\n    <h3 class=\"header-text\" (click)=\"toggleGroup(i)\">\n      จุดส่งที่ : {{d.drop_number}}\n      <ion-icon color=\"light\" item-right [name]=\"isGroupShown(i) ? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\n    </h3>\n    <div *ngIf=\"isGroupShown(i)\">\n      <!-- UI Drop Order -->\n      <div class=\"mt-3\">\n        <ion-row>\n          <ion-col> Orders : {{d.order_count}} </ion-col>\n          <ion-col class=\"text-right\">\n            <ion-button hidden size=\"small\" color=\"primary\" (click)=\"checkSenddata(i)\" [disabled]=\"!this.disablesend\">\n              นำส่ง {{this.countorderselect}}\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"ion-text-center\" size=\"1\">\n\n            <ion-checkbox class=\"custom-checkbox\" (ionChange)=\"toggleAllCheckboxes($event)\"></ion-checkbox>\n\n\n          </ion-col>\n        </ion-row>\n        <ion-grid>\n          <ion-row class=\"header\">\n            <ion-col class=\"col\" size=\"1\">No</ion-col>\n            <ion-col class=\"col\" size=\"3\">Order</ion-col>\n            <ion-col class=\"col\" size=\"6\">ลูกค้า</ion-col>\n            <ion-col class=\"col\" size=\"1\">\n              <div style=\"text-align: center\">\n                <fa-icon icon=\"info-circle\"></fa-icon>\n              </div>\n            </ion-col>\n            <ion-col class=\"col\" size=\"1\">ส่ง</ion-col>\n          </ion-row>\n          <ion-row class=\"row\" *ngFor=\"let result of datas[0];let idx = index\">\n            <ion-col class=\"col\" size=\"1\">{{result.no}}</ion-col>\n            <ion-col class=\"col\" size=\"3\" (click)=\"openModal(i,idx)\">{{result.order_no}}</ion-col>\n            <ion-col class=\"col\" size=\"6\">\n              <div>\n                <fa-icon style=\"font-size: 8px\" icon=\"user\"></fa-icon>&nbsp;{{result.customer}}\n              </div>\n              <div class=\"styleTextCity\">\n                <fa-icon style=\"font-size: 8px\" icon=\"map-marker\"></fa-icon>&nbsp;{{result.ship_to_city}}\n              </div>\n            </ion-col>\n            <ion-col class=\"col pd-none text-center\" size=\"1\">\n              <!--\n              <ion-button\n                class=\"btn-smm\"\n                *ngIf=\"result.remark\"\n                size=\"small\"\n                color=\"primary\"\n                (click)=\"openModal(i,idx)\"\n              >\n                <fa-icon icon=\"eye\"></fa-icon> </ion-button\n            >\n            -->\n              <button class=\"btn-smm\" size=\"small\" color=\"primary\" (click)=\"openModal(i,idx)\">\n                <fa-icon icon=\"eye\" class=\"text-white\"></fa-icon>\n              </button>\n            </ion-col>\n            <ion-col class=\"col pd-0\" size=\"1\">\n              <div class=\"ion-text-center pd-3px\" *ngIf=\"!result.shipping_status_deliver\">\n                <!-- <input type=\"checkbox\" [checked]=\"result.shipping_status_waiting\" -->\n                <input type=\"checkbox\" [checked]=\"result.shipping_status_waiting\"\n                  (change)=\"changeCheckbox(i,idx,$event)\" />\n              </div>\n              <div class=\"ion-text-center\" *ngIf=\"result.shipping_status_deliver\">\n                <ion-text color=\"success\">ส่ง</ion-text>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class=\"hr\"></div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <section class=\"full-width\">\n      <!-- <div *ngIf=\"this.utilservice.jobList.length == 0\">\n        <ion-button [routerLink]=\"['/home']\" expand=\"full\" color=\"primary\" size=\"large\">กลับไปหน้าหลัก &nbsp;\n        </ion-button>\n      </div> -->\n\n      <ion-button style=\"text-transform: none !important\" expand=\"full\" size=\"large\" color=\"success\"\n        *ngIf=\"this.countorderselect > 0\" (click)=\"sendData()\">\n        เตรียมนำส่ง {{this.countorderselect}} Order\n      </ion-button>\n\n      <ion-button expand=\"full\" hidden color=\"primary\" (click)=\"showJoblist();\" id=\"chickrefresh\">รีเฟรช\n      </ion-button>\n      <!-- <ion-button hidden (click)=\"Home();\" expand=\"full\" class=\"buttonBackHome\" size=\"large\">กลับไปหน้าหลัก</ion-button> -->\n      <ion-button [routerLink]=\"['/home']\" expand=\"full\" color=\"primary\" size=\"large\">กลับไปหน้าหลัก &nbsp;\n      </ion-button>\n    </section>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/deliver-history/deliver-history.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/deliver-history/deliver-history.module.ts ***!
  \***********************************************************/
/*! exports provided: DeliverHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverHistoryPageModule", function() { return DeliverHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _deliver_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deliver-history.page */ "./src/app/deliver-history/deliver-history.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let DeliverHistoryPageModule = class DeliverHistoryPageModule {
};
DeliverHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                {
                    path: '',
                    component: _deliver_history_page__WEBPACK_IMPORTED_MODULE_5__["DeliverHistoryPage"]
                }
            ])
        ],
        declarations: [_deliver_history_page__WEBPACK_IMPORTED_MODULE_5__["DeliverHistoryPage"]]
    })
], DeliverHistoryPageModule);



/***/ }),

/***/ "./src/app/deliver-history/deliver-history.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/deliver-history/deliver-history.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #2b388f;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.blues-nav {\n  --background: #2b388f;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n.search_input {\n  background: #eee;\n}\n\n.fs-30 {\n  font-size: 30px;\n}\n\nion-input.searchBtn {\n  padding-left: 1rem !important;\n}\n\n.bg-blue {\n  background: #2b388f;\n}\n\n.card-container {\n  display: -webkit-box;\n  background: #2b388f;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n}\n\n.card-summary {\n  width: 40%;\n  background: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1rem 0.5rem;\n}\n\n.card-summary img {\n  margin-right: 0.3rem;\n  width: 24px;\n  height: 24px;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n  font-size: 14px;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.status {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.status.md {\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.status.success {\n  background-color: #2b8f2b;\n}\n\n.status.wait {\n  background-color: #e6d227;\n}\n\n.status.fail {\n  background-color: #d32a2a;\n}\n\n.header-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #2b388e;\n  color: #fff;\n  padding: 1rem;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0;\n  border-bottom: 1px solid #fff;\n}\n\n.text-right {\n  text-align: right;\n}\n\nion-button.btn-smm button.button-native {\n  padding: 0 !important;\n}\n\n.btn-smm {\n  background: #2b388e;\n  padding: 0.1rem;\n  border-radius: 3px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  min-width: 24px;\n  width: 24px;\n  height: 25px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 1px;\n  font-size: 13px;\n}\n\n.pd-none {\n  padding: 2px !important;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.pd-3px {\n  padding: 3px;\n}\n\n.pd-0 {\n  padding: 0 !important;\n}\n\ninput[type=checkbox] {\n  transform: scale(1);\n  -ms-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1);\n  -o-transform: scale(1);\n  width: 100%;\n  min-width: 23px;\n  height: 25px;\n  border-radius: 2px !important;\n}\n\n.buttonBackHome {\n  --background: #6C757D;\n}\n\n.styleTextCity {\n  color: #898589;\n}\n\n@media screen and (max-width: 320px) {\n  .btn-smm,\n.btn-remark,\n.btn-delete {\n    padding: 0.1rem;\n    border-radius: 3px;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    min-width: 22px;\n    width: 22px;\n    height: 21px;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-top: 1px;\n    font-size: 13px;\n  }\n\n  input[type=checkbox] {\n    transform: scale(1);\n    -ms-transform: scale(1);\n    -moz-transform: scale(1);\n    -webkit-transform: scale(1);\n    -o-transform: scale(1);\n    width: 100%;\n    min-width: 20px;\n    height: 21px;\n    border-radius: 2px !important;\n  }\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.custom-checkbox,\n.checkbox-icon {\n  min-width: 25px;\n  min-height: 25px;\n  border-radius: 3px;\n}\n\n:host ion-content {\n  --background: #fff;\n  --offset-bottom: 0px !important;\n  --overflow: scroll !important;\n  overflow-y: scroll !important;\n  height: 100% !important;\n}\n\n:host ion-content::part(scroll) {\n  overflow-y: scroll !important;\n  -webkit-overflow-scrolling: touch !important;\n  touch-action: pan-y !important;\n}\n\n:host ion-content::part(background) {\n  background: #fff;\n}\n\n.scroll-content {\n  overflow-y: scroll !important;\n  -webkit-overflow-scrolling: touch !important;\n  height: auto !important;\n  min-height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL2RlbGl2ZXItaGlzdG9yeS9kZWxpdmVyLWhpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9kZWxpdmVyLWhpc3RvcnkvZGVsaXZlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FER0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDREo7O0FER0k7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRE47O0FET0E7RUFDRSwyQkFBQTtBQ0pGOztBRE9BO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsNEJBQUE7QUNKRjs7QURPQTtFQUNFLDZCQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURNRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURPRTtFQUNFLHlCQUFBO0FDTEo7O0FEUUU7RUFDRSx5QkFBQTtBQ05KOztBRFNFO0VBQ0UseUJBQUE7QUNQSjs7QURXQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7QUNSRjs7QURXQTtFQUNFLHFCQUFBO0FDUkY7O0FEV0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUkY7O0FEV0E7RUFDRSx1QkFBQTtBQ1JGOztBRFlBO0VBQ0UsV0FBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBRFlBO0VBQ0UscUJBQUE7QUNURjs7QURZQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ1RGOztBRFlBO0VBQ0UscUJBQUE7QUNURjs7QURZQTtFQUNFLGNBQUE7QUNURjs7QURZQTtFQUVFOzs7SUFHRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSwyQkFBQTtJQUFBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQ1ZGOztFRGFBO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0VDVkY7QUFDRjs7QURnQkE7RUFDRSw2QkFBQTtBQ2RGOztBRGlCQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2RGOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNoQko7O0FEa0JJO0VBQ0UsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0FDaEJOOztBRG1CSTtFQUNFLGdCQUFBO0FDakJOOztBRHVCQTtFQUNFLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDcEJGIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlci1oaXN0b3J5L2RlbGl2ZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1kYXRhLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWNhcmQtZGl2IHtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XG59XG5cbi5ibHVlcy1uYXYge1xuICAtLWJhY2tncm91bmQ6ICMyYjM4OGY7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLm5hdi1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcHRuLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gZmEtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaF9pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWlucHV0LnNlYXJjaEJ0biB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG59XG5cbi5jYXJkIHtcbiAgJi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cblxuICAmLXN1bW1hcnkge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuM3JlbTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5oZWFkZXIgLmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmNvbCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xufVxuXG4uc3RhdHVzIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJi5tZCB7XG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOGYyYjtcbiAgfVxuXG4gICYud2FpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZDIyNztcbiAgfVxuXG4gICYuZmFpbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmEyYTtcbiAgfVxufVxuXG4uaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMyYjM4OGU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tYnV0dG9uLmJ0bi1zbW0gYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc21tIHtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZTtcbiAgcGFkZGluZzogMC4xcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnBkLW5vbmUge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGQtM3B4IHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucGQtMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25CYWNrSG9tZSB7XG4gIC0tYmFja2dyb3VuZDogIzZDNzU3RDtcbn1cblxuLnN0eWxlVGV4dENpdHkge1xuICBjb2xvcjogIzg5ODU4OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCkge1xuXG4gIC5idG4tc21tLFxuICAuYnRuLXJlbWFyayxcbiAgLmJ0bi1kZWxldGUge1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWluLXdpZHRoOiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbiAgfVxuXG5cbn1cblxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jaGVja2JveCxcbi5jaGVja2JveC1pY29uIHtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8vIEZpeCBzY3JvbGxpbmcgaXNzdWUgZm9yIG1vYmlsZSAtIENSSVRJQ0FMXG46aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1vZmZzZXQtYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBcbiAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2ggIWltcG9ydGFudDtcbiAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgJjo6cGFydChiYWNrZ3JvdW5kKSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnN1cmUgc2Nyb2xsYWJsZSB3cmFwcGVyXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4iLCIuaG9tZS1kYXRhLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWNhcmQtZGl2IHtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWhlYWRlciB7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYmFja2dyb3VuZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTJlMmUyICFpbXBvcnRhbnQ7XG59XG5cbi5ibHVlcy1uYXYge1xuICAtLWJhY2tncm91bmQ6ICMyYjM4OGY7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLm5hdi1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcHRuLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtd2lkZ2V0LWljb24gZmEtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaF9pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWlucHV0LnNlYXJjaEJ0biB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmNhcmQtc3VtbWFyeSB7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG59XG4uY2FyZC1zdW1tYXJ5IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaGVhZGVyIC5jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5jb2wge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnN0YXR1cyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXR1cy5tZCB7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLnN0YXR1cy5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiOGYyYjtcbn1cbi5zdGF0dXMud2FpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmQyMjc7XG59XG4uc3RhdHVzLmZhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyYTJhO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMyYjM4OGU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tYnV0dG9uLmJ0bi1zbW0gYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc21tIHtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZTtcbiAgcGFkZGluZzogMC4xcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnBkLW5vbmUge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnBkLTNweCB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnBkLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uQmFja0hvbWUge1xuICAtLWJhY2tncm91bmQ6ICM2Qzc1N0Q7XG59XG5cbi5zdHlsZVRleHRDaXR5IHtcbiAgY29sb3I6ICM4OTg1ODk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5idG4tc21tLFxuLmJ0bi1yZW1hcmssXG4uYnRuLWRlbGV0ZSB7XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtaW4td2lkdGg6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jaGVja2JveCxcbi5jaGVja2JveC1pY29uIHtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLW9mZnNldC1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2ggIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teSAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQ6OnBhcnQoYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/deliver-history/deliver-history.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/deliver-history/deliver-history.page.ts ***!
  \*********************************************************/
/*! exports provided: DeliverHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverHistoryPage", function() { return DeliverHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _remark_modal_remark_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../remark-modal/remark-modal.page */ "./src/app/remark-modal/remark-modal.page.ts");
/* harmony import */ var _order_model_order_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../order-model/order-model.page */ "./src/app/order-model/order-model.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _deliver_modal_deliver_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../deliver-modal/deliver-modal.page */ "./src/app/deliver-modal/deliver-modal.page.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");












let DeliverHistoryPage = class DeliverHistoryPage {
    constructor(alertContrl, navController, modalCtrl, camera, utilservice, http, loadingcontroll, router, activatedroute, authService) {
        this.alertContrl = alertContrl;
        this.navController = navController;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.utilservice = utilservice;
        this.http = http;
        this.loadingcontroll = loadingcontroll;
        this.router = router;
        this.activatedroute = activatedroute;
        this.authService = authService;
        this.shownGroup = null;
        this.countorder = 0;
        this.dropnumber = [];
        this.datas = [];
        this.countorderselect = 0;
        this.disablesend = true;
        this.showJoblist = () => {
            this.countorderselect = 0;
            this.countorder = 0;
            for (let i = 0; i < this.utilservice.jobList.length; i++) {
                this.dropnumber[i] = {
                    drop_number: `${this.utilservice.jobList[i].drop_number}`,
                    order_count: `${this.utilservice.jobList[i].order_count}`,
                    shipping_status_deliver: `${this.utilservice.jobList[i].shipping_status_deliver}`,
                };
                this.countorder = this.countorder + this.dropnumber[i].order_count * 1;
            }
            this.utilservice.servicedropcount = this.countdrop;
            this.utilservice.serviceordercount = this.countorder;
        };
        this.downloadMyJob = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userLogin = yield localStorage.getItem("userLogin");
            this.http
                .get(`${this.utilservice.baseURL}api/TokenValidate`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${JSON.parse(userLogin)["access_token"]}`,
                },
            })
                .toPromise()
                .then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const loading = yield this.loadingcontroll.create({
                    cssClass: "my-custom-class",
                    message: "กำลังโหลดงานของฉัน...",
                });
                yield loading.present();
                yield this.utilservice.delay(1000);
                this.http
                    .get(`${this.utilservice.baseURL}api/DriverJob/GetDriverJobs`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                    },
                })
                    .toPromise()
                    .then((val) => {
                    this.utilservice.jobList = [];
                    if (val) {
                        this.utilservice.jobList = val;
                        for (let i = 0; i < this.utilservice.jobList.length; i++) {
                            let countorder = 0;
                            for (let j = 0; j < this.utilservice.jobList[i].orders.length; j++) {
                                this.utilservice.jobList[i].orders[j].shipping_status_waiting = false;
                                if (this.utilservice.completejobList.filter((e) => {
                                    return (e.order_id ==
                                        this.utilservice.jobList[i].orders[j].order_id);
                                }).length > 0) {
                                    this.utilservice.jobList[i].orders[j].shipping_status_deliver = true;
                                    countorder++;
                                }
                                else {
                                    this.utilservice.jobList[i].orders[j].shipping_status_deliver = false;
                                }
                            }
                            if (countorder == this.utilservice.jobList[i].orders.length) {
                                this.utilservice.jobList[i].shipping_status_deliver = true;
                            }
                            else {
                                this.utilservice.jobList[i].shipping_status_deliver = false;
                            }
                        }
                        this.countdrop = this.utilservice.jobList.length;
                        this.showJoblist();
                        document.getElementById("chickrefresh").click();
                    }
                })
                    .catch((reason) => {
                    this.utilservice.jobList = [];
                })
                    .finally(() => {
                    loading.dismiss();
                });
            }))
                .catch((reason) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('[DeliverHistory] TokenValidate failed, attempting re-login...', reason);
                yield this.authService.handleTokenError();
            }));
        });
        this.checkSenddata = (i) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let countrow = 0;
            for (let x = 0; x < this.utilservice.jobList[i].orders.length; x++) {
                if (this.utilservice.jobList[i].orders[x].shipping_status_waiting) {
                    if (this.utilservice.completejobList.length === 0) {
                        this.utilservice.jobList[i].orders[x].shipping_status_deliver = true;
                        this.utilservice.jobList[i].orders[x].shipping_status_code = "00";
                        this.utilservice.completejobList.push(this.utilservice.jobList[i].orders[x]);
                    }
                    else {
                        if (this.utilservice.completejobList.filter((e) => {
                            return (e.order_id == this.utilservice.jobList[i].orders[x].order_id);
                        }).length > 0) {
                            console.log("ซ่ำ");
                        }
                        else {
                            this.utilservice.jobList[i].orders[x].shipping_status_deliver =
                                true;
                            this.utilservice.jobList[i].orders[x].shipping_status_code = "00";
                            this.utilservice.completejobList.push(this.utilservice.jobList[i].orders[x]);
                        }
                    }
                    countrow++;
                }
                else {
                    if (this.utilservice.completejobList.filter((e) => {
                        return e.order_id == this.utilservice.jobList[i].orders[x].order_id;
                    }).length > 0) {
                        this.utilservice.completejobList =
                            this.utilservice.completejobList.filter((e) => {
                                return (e.order_id != this.utilservice.jobList[i].orders[x].order_id);
                            });
                    }
                }
            }
            if (this.countorderselect === 0) {
                const alert = yield this.alertContrl.create({
                    cssClass: "my-custom-class",
                    header: "แจ้งเตือน",
                    message: `กรุณาเลือก Order อย่างน้อย 1 รายการ`,
                    buttons: ["ตกลง"],
                });
                yield alert.present();
            }
            else {
                countrow = 0;
                this.Deliver();
            }
        });
        this.changeCheckbox = (i, idx, event) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.datas[0][idx].shipping_status_waiting = event.target.checked;
            if (event.target.checked) {
                this.countorderselect = this.countorderselect + 1;
            }
            else {
                this.countorderselect = this.countorderselect - 1;
            }
            if (this.countorderselect == 0) {
                this.disablesend = false;
            }
            else {
                this.disablesend = true;
            }
        });
        activatedroute.params.subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.downloadMyJob();
            this.dropnumber = [];
            this.datas = [];
            this.countdrop = this.utilservice.jobList.length;
            this.shownGroup = true;
            this.disablesend = true;
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.downloadMyJob();
            this.dropnumber = [];
            this.datas = [];
            this.countdrop = this.utilservice.jobList.length;
            this.shownGroup = true;
            this.disablesend = true;
            // document.getElementById("chickrefresh").click();
            this.utilservice.servicedropcount = this.countdrop;
            this.utilservice.serviceordercount = this.countorder;
            // Force enable scrolling
            setTimeout(() => {
                if (this.content) {
                    this.content.scrollY = true;
                }
            }, 100);
        });
    }
    Home() {
        this.router.navigate(["/home"]);
        // this.navController.navigateForward("/home");
    }
    Deliver() {
        this.router.navigate(["/deliver"]);
        // this.navController.navigateForward("/deliver");
    }
    toggleGroup(group) {
        this.selectDrop = group;
        this.countorderselect = 0;
        this.datas = [];
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
            let countnotcheckbox = 0;
            this.datas.push(this.utilservice.jobList[group].orders);
            for (let i = 0; i < this.utilservice.jobList[group].orders.length; i++) {
                if (!this.utilservice.jobList[group].orders[i].shipping_status_deliver && this.utilservice.jobList[group].orders[i].shipping_status_waiting) {
                    this.countorderselect = this.countorderselect + 1;
                }
            }
            if (this.countorderselect == 0) {
                this.disablesend = false;
            }
            else {
                this.disablesend = true;
            }
        }
    }
    isGroupShown(group) {
        return this.shownGroup === group;
    }
    openModal(i, idx) {
        this.modalCtrl
            .create({
            component: _remark_modal_remark_modal_page__WEBPACK_IMPORTED_MODULE_2__["RemarkModalPage"],
            componentProps: {
                remark: this.utilservice.jobList[i].orders[idx],
            },
        })
            .then((modal) => modal.present());
    }
    openOrderModel(index) {
        this.modalCtrl
            .create({
            component: _order_model_order_model_page__WEBPACK_IMPORTED_MODULE_3__["OrderModelPage"],
            componentProps: {
                order: this.utilservice.jobList[index].orders,
            },
        })
            .then((modal) => modal.present());
    }
    deliverModal(index) {
        this.modalCtrl
            .create({
            component: _deliver_modal_deliver_modal_page__WEBPACK_IMPORTED_MODULE_9__["DeliverModalPage"],
            componentProps: {
                orders: this.utilservice.jobList[index].orders,
            },
        })
            .then((modal) => modal.present());
    }
    toggleAllCheckboxes(event) {
        const isChecked = event.target.checked;
        this.datas[0].forEach((order, idx) => {
            order.shipping_status_waiting = isChecked;
        });
        this.countorderselect = isChecked ? this.datas[0].length : 0;
        this.disablesend = this.countorderselect === 0;
    }
    sendData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let countrow = 0;
            for (let x = 0; x < this.utilservice.jobList[this.selectDrop].orders.length; x++) {
                if (this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_waiting) {
                    if (this.utilservice.completejobList.length === 0) {
                        this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_deliver = true;
                        this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_code = "00";
                        this.utilservice.completejobList.push(this.utilservice.jobList[this.selectDrop].orders[x]);
                    }
                    else {
                        if (this.utilservice.completejobList.filter((e) => {
                            return (e.order_id == this.utilservice.jobList[this.selectDrop].orders[x].order_id);
                        }).length > 0) {
                            console.log("ซ่ำ");
                        }
                        else {
                            this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_deliver =
                                true;
                            this.utilservice.jobList[this.selectDrop].orders[x].shipping_status_code = "00";
                            this.utilservice.completejobList.push(this.utilservice.jobList[this.selectDrop].orders[x]);
                        }
                    }
                    countrow++;
                }
                else {
                    if (this.utilservice.completejobList.filter((e) => {
                        return e.order_id == this.utilservice.jobList[this.selectDrop].orders[x].order_id;
                    }).length > 0) {
                        this.utilservice.completejobList =
                            this.utilservice.completejobList.filter((e) => {
                                return (e.order_id != this.utilservice.jobList[this.selectDrop].orders[x].order_id);
                            });
                    }
                }
            }
            if (this.countorderselect === 0) {
                const alert = yield this.alertContrl.create({
                    cssClass: "my-custom-class",
                    header: "แจ้งเตือน",
                    message: `กรุณาเลือก Order อย่างน้อย 1 รายการ`,
                    buttons: ["ตกลง"],
                });
                yield alert.present();
            }
            else {
                countrow = 0;
                this.router.navigate(["/deliver"]);
            }
        });
    }
};
DeliverHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])
], DeliverHistoryPage.prototype, "content", void 0);
DeliverHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-deliver-history",
        template: __webpack_require__(/*! raw-loader!./deliver-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/deliver-history/deliver-history.page.html"),
        styles: [__webpack_require__(/*! ./deliver-history.page.scss */ "./src/app/deliver-history/deliver-history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
], DeliverHistoryPage);



/***/ })

}]);
//# sourceMappingURL=deliver-history-deliver-history-module-es2015.js.map