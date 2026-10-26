(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deliver-deliver-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/deliver/deliver.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deliver/deliver.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"blues-nav\">\n    <ion-buttons slot=\"start\" class=\"nav-content\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>นำส่งสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"deliver-content\" scrollY=\"true\" style=\"background: #fff\">\n  <div class=\"ion-grid\">\n    <ion-row>\n      <ion-col>\n        <ion-item class=\"search_input ion-no-padding\">\n          <ion-input class=\"searchBtn\" type=\"text\" placeholder=\"กรอกหมายเลขหรือแสกน\" [(ngModel)]=\"textinputcomplete\">\n          </ion-input>\n          <button item-right (click)=\"gettextinput()\" *ngIf=\"textinputcomplete\">\n            <ion-icon ios=\"ios-add-circle-outline\" md=\"md-add-circle-outline\" class=\"fs-30\"></ion-icon>\n          </button>\n          <button item-right (click)=\"startscanning()\" *ngIf=\"!textinputcomplete\">\n            <ion-icon ios=\"ios-qr-scanner\" md=\"md-qr-scanner\" class=\"fs-30\"></ion-icon>\n          </button>\n          <!--<button item-right [routerLink]=\"['/completejob-qrscanner']\" *ngIf=\"!textinputcomplete\">\n            <ion-icon ios=\"ios-qr-scanner\" md=\"md-qr-scanner\" class=\"fs-30\"></ion-icon>\n          </button>-->\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div style=\"margin: 0.3rem\" *ngIf=\"this.utilservice.completelist_table.length !== 0\">\n    <div class=\"ion-grid\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <span style=\"font-size: 20px\">Orders : {{this.ordercount}} </span>\n        </ion-col>\n        <ion-col class=\"text-right\" size=\"8\">\n          <span class=\"span-success\">\n            <fa-icon icon=\"check\"></fa-icon> : {{\n            this.utilservice.ordercount_success}}\n          </span>\n          <span class=\"span-fail\"><fa-icon icon=\"times\"></fa-icon> : {{\n            this.utilservice.ordercount_fail}}\n          </span>\n          <!--  <ion-button\n            size=\"small\"\n            (click)=\"historydeliver()\"\n            class=\"circle-btn\"\n          >\n            <fa-icon icon=\"plus\"></fa-icon>\n            &nbsp; เพิ่ม\n          </ion-button>-->\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf=\"this.utilservice.completelist_table.length === 0\" class=\"ion-text-center\" style=\"font-size: 20px\">\n    ไม่มีรายการ\n  </div>\n\n  <!-- แสดงจำนวนบิล และ จำนวนสินค้า หลังจากแสกน -->\n  <div class=\"bg-blue\" hidden>\n    <div class=\"ion-grid ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"card-container\">\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/bill.png\" alt=\"\" />\n              จำนวน 4 บิล\n            </div>\n            <div class=\"card-summary\">\n              <img src=\"./../../assets/imgs/parcel.png\" alt=\"\" />\n              จำนวน 20 ชิ้น\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <!-- แสดงผลรายการ -->\n  <div *ngFor=\"let d of this.utilservice.completelist_table; let i=index\" class=\"ion-text-wrap\">\n    <h3 class=\"header-text\">จุดส่งที่ : {{d.drop_number}}</h3>\n    <div>\n      <div class=\"ion-grid\">\n        <ion-row>\n          <ion-col>Orders : {{d.order_count}}</ion-col>\n          <ion-col class=\"text-right\">\n            <ion-button size=\"small\" color=\"danger\" (click)=\"delete_item(i,d.drop_number)\"><fa-icon\n                icon=\"times\"></fa-icon>&nbsp; ยกเลิกการนำส่ง</ion-button>\n          </ion-col>\n        </ion-row>\n\n        <div>\n          <div class=\"ion-grid\">\n            <ion-row class=\"header\">\n              <ion-col class=\"col\" size=\"1\">No</ion-col>\n              <ion-col class=\"col\" size=\"3\">Order</ion-col>\n              <ion-col class=\"col\" size=\"5\">ลูกค้า</ion-col>\n              <ion-col class=\"col pd-none\" size=\"1\">\n                <div style=\"text-align: center\">\n                  <fa-icon icon=\"info-circle\"></fa-icon>\n                </div>\n              </ion-col>\n              <ion-col class=\"col pd-none\" size=\"1\">ส่ง</ion-col>\n              <ion-col class=\"col pd-none\" size=\"1\">\n                <div style=\"text-align: center\"></div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"row\" *ngFor=\"let result of this.utilservice.completelist_table[i].orders;let idx = index\">\n              <ion-col class=\"col\" size=\"1\"><ion-text\n                  [color]=\"result.shipping_status_deliver == true ? '' : 'danger'\">{{idx+1}}</ion-text></ion-col>\n              <ion-col class=\"col\" size=\"2\" (click)=\"openModal(i,idx)\"><ion-text\n                  [color]=\"result.shipping_status_deliver == true ? '' : 'danger'\">{{result.order_no}}</ion-text></ion-col>\n              <ion-col class=\"col\" size=\"6\" (click)=\"openModal(i,idx)\">\n                <div>\n                  <ion-text [color]=\"result.shipping_status_deliver == true ? '' : 'danger'\"><fa-icon\n                      style=\"font-size: 8px\" icon=\"user\"></fa-icon>&nbsp;{{result.customer}}</ion-text>\n                </div>\n                <div>\n                  <ion-text [color]=\"result.shipping_status_deliver == true ? 'medium' : 'danger'\">\n                    <fa-icon style=\"font-size: 8px\" icon=\"map-marker\"></fa-icon>&nbsp;{{result.ship_to_city}}\n                  </ion-text>\n                </div>\n                <div *ngIf=\"result.rejectReason != null && result.rejectReasonOther == null\">\n                  <ion-text [color]=\"result.shipping_status_deliver == true ? 'medium' : 'danger'\"><fa-icon\n                      style=\"font-size: 8px\" icon=\"times\"></fa-icon>\n                    {{result.rejectReason}}&nbsp;{{result.remark_reason}}\n                  </ion-text>\n                </div>\n                <div *ngIf=\"result.rejectReason == null && result.rejectReasonOther != null\">\n                  <ion-text [color]=\"result.shipping_status_deliver == true ? 'medium' : 'danger'\"><fa-icon\n                      style=\"font-size: 8px\" icon=\"check\"></fa-icon>\n                    {{result.rejectReasonOther}}\n                  </ion-text>\n                </div>\n              </ion-col>\n              <ion-col class=\"col pd-none text-center\" size=\"1\">\n                <!--   <ion-button\n                  *ngIf=\"result.remark\"s\n                  size=\"small\"\n                  color=\"primary\"\n                  (click)=\"openModal(i,idx)\"\n                >\n                  <fa-icon icon=\"eye\"></fa-icon> </ion-button\n              >-->\n                <button class=\"btn-remark\" size=\"small\" color=\"primary\" (click)=\"editOrder(i,idx,'detail')\">\n                  <fa-icon icon=\"pen\" class=\"text-white\"></fa-icon>\n                </button>\n\n                <!-- <button\n                  class=\"btn-smm\"\n                  size=\"small\"\n                  color=\"primary\"\n                  (click)=\"openModal(i,idx)\"\n                >\n                \n                  <fa-icon icon=\"eye\" class=\"text-white\"></fa-icon>\n                </button> -->\n              </ion-col>\n              <ion-col class=\"col text-center pd-0\" size=\"1\">\n                <div class=\"ion-text-center pd-3px\">\n                  <input type=\"checkbox\" [checked]=\"result.shipping_status_deliver\"\n                    (change)=\"changeCheckbox_Shipping(i,idx,$event,'notSuccess')\" />\n                </div>\n              </ion-col>\n              <ion-col class=\"col pd-none text-center\" size=\"1\">\n                <!--    <ion-button\n                  size=\"small\"\n                  color=\"primary\"\n                  (click)=\"editOrder(i,idx)\"\n                >\n                  <fa-icon icon=\"pen\"></fa-icon>\n                </ion-button>\n                 <ion-button\n                  size=\"small\"\n                  color=\"danger\"\n                  (click)=\"delete_order(i,idx,result.order_id)\"\n                >\n                  <fa-icon icon=\"times\"></fa-icon>\n                </ion-button>-->\n                <div style=\"text-align: center\">\n                  <button class=\"btn-delete\" size=\"small\" color=\"danger\" (click)=\"delete_order(i,idx,result.order_id)\">\n                    <fa-icon icon=\"times\" class=\"text-white\"></fa-icon>\n                  </button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [hidden]=\"boolhide\">\n    <div class=\"ion-grid\">\n      <ion-row hidden>\n        <ion-col>\n          <ion-item class=\"ion-no-padding\">\n            <ion-label>สถานะ</ion-label>\n            <ion-select #statuss name=\"status\" [(ngModel)]=\"status\" (ionChange)=\"onChange(status)\" okText=\"ตกลง\"\n              cancelText=\"ยกเลิก\">\n              <ion-select-option value=\"00\">นำส่งสำเร็จ</ion-select-option>\n              <ion-select-option value=\"R00\">นำส่งไม่สำเร็จ</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div>\n        <ion-row>\n          <ion-col>\n            <ion-slides [options]=\"sliderOpts\">\n              <ion-slide *ngFor=\"let img of showimage;let i = index\">\n                <div class=\"warpper-img\">\n                  <!-- <img src=\"assets/imgs/{{img}}.jpg\" alt=\"\" tappable (click)=\"openPreview(img)\">-->\n                  <img [src]=\"img\" alt=\"\" tappable (click)=\"openPreview(i)\" />\n                </div>\n                <div class=\"btn-delete-img\">\n                  <ion-button expand=\"full\" color=\"danger\" (click)=\"delete_image(i,img)\">ลบรูปภาพ &nbsp;\n                    <fa-icon icon=\"trash\"></fa-icon>\n                  </ion-button>\n                </div>\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf=\"statuss.value === 'R00' || statuss.value === '3' || statuss.value === '4'\">\n        <ion-row>\n          <ion-col>\n            <ion-label position=\"stacked\">หมายเหตุ</ion-label>\n            <ion-textarea [(ngModel)]=\"note\"></ion-textarea>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div class=\"ion-grid\" [hidden]=\"boolhide\">\n      <ion-row *ngIf=\"this.utilservice.signatureData !== ''\">\n        <ion-col>\n          <div class=\"warpper-sig\" style=\"border-style: solid\">\n            <img [src]=\"this.utilservice.signatureData\" alt=\"\" tappable height=\"300\" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div [hidden]=\"true\">\n      <div class=\"ion-grid\">\n        <ion-row>\n          <ion-col>\n            <ion-label>ระบุลายเซ็น</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <canvas #imageCanvas (touchstart)=\"startDrawing($event)\" (mousedown)=\"startDrawing($event)\"\n              (touchmove)=\"moved($event)\" (mousemove)=\"moved($event)\" (mouseup)=\"endDrawing()\"\n              (touchend)=\"endDrawing()\">\n            </canvas>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"clearCanvas()\">\n              ล้างลายเซ็น &nbsp;\n              <fa-icon icon=\"pen\"></fa-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <section class=\"full-width\">\n      <div *ngIf=\"this.utilservice.completelist_table.length === 0\">\n        <ion-button [routerLink]=\"['/home']\" routerDirection=\"forward\" expand=\"full\" color=\"primary\"\n          size=\"large\">กลับไปหน้าหลัก&nbsp;\n        </ion-button>\n      </div>\n\n      <ion-button [hidden]=\"boolhide\" expand=\"full\" color=\"warning\" (click)=\"takePhoto()\" size=\"large\">ถ่ายรูปภาพ &nbsp;\n        <fa-icon icon=\"camera\"></fa-icon>\n      </ion-button>\n\n      <div [hidden]=\"boolhide\">\n        <ion-button [hidden]=\"this.utilservice.ishidden\" (click)=\"getSignature('eventPass')\" expand=\"full\" size=\"large\"\n          color=\"primary\">กรอกลายเซ็น &nbsp;\n        </ion-button>\n      </div>\n      <ion-button (click)=\"showJoblist();\" hidden id=\"chickrefresh\" expand=\"full\" color=\"primary\">รีเฟรช\n      </ion-button>\n\n      <ion-button (click)=\"submit_deliver('ยืนยันการนำส่ง');\" expand=\"full\" color=\"success\" size=\"large\"\n        [hidden]=\"!this.utilservice.completejobList.length \"\n        *ngIf=\"this.utilservice.ordercount_success != 0 \">ยืนยันการนำส่ง\n      </ion-button>\n\n      <ion-button (click)=\"submit_deliver('ยืนยันการส่งไม่สำเร็จ');\" expand=\"full\" color=\"danger\" size=\"large\"\n        [hidden]=\"!this.utilservice.completejobList.length\"\n        *ngIf=\"this.utilservice.ordercount_success == 0 \">ยืนยันการส่งไม่สำเร็จ\n      </ion-button>\n    </section>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/deliver/deliver.module.ts":
/*!*******************************************!*\
  !*** ./src/app/deliver/deliver.module.ts ***!
  \*******************************************/
/*! exports provided: DeliverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverPageModule", function() { return DeliverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _deliver_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deliver.page */ "./src/app/deliver/deliver.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








let DeliverPageModule = class DeliverPageModule {
};
DeliverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _deliver_page__WEBPACK_IMPORTED_MODULE_5__["DeliverPage"]
                }
            ]),
        ],
        declarations: [_deliver_page__WEBPACK_IMPORTED_MODULE_5__["DeliverPage"]],
    })
], DeliverPageModule);



/***/ }),

/***/ "./src/app/deliver/deliver.page.scss":
/*!*******************************************!*\
  !*** ./src/app/deliver/deliver.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-data-card {\n  position: relative;\n  margin-top: -50px;\n  background: white;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.profile-card-div {\n  background: #2b388f;\n  height: 280px;\n  width: 100% !important;\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-card {\n  margin: 0 !important;\n  box-shadow: none !important;\n}\n\n.home-header {\n  height: 144px;\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  border-radius: 100px;\n  width: 300px;\n}\n\n.background-content {\n  --background: #e2e2e2 !important;\n}\n\n.blues-nav {\n  --background: #2b388f;\n}\n\nion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n}\n\n.nav-content {\n  color: #fff;\n}\n\n.optn-btn {\n  font-size: 26px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n\n.dash-widget-icon fa-icon {\n  border-radius: 50%;\n  font-size: 40px;\n  height: 50px;\n  line-height: 48px;\n  font-weight: 400;\n  text-align: center;\n  width: 50px;\n}\n\nion-menu-button {\n  color: #fff;\n}\n\n:host ion-content.deliver-content {\n  --background: #fff;\n  --offset-bottom: 0px !important;\n  --overflow: auto !important;\n}\n\n:host ion-content.deliver-content::part(scroll) {\n  overflow-y: auto !important;\n  -webkit-overflow-scrolling: touch !important;\n  touch-action: pan-y !important;\n}\n\n.search_input {\n  background: #eee;\n}\n\n.fs-30 {\n  font-size: 30px;\n}\n\nion-input.searchBtn {\n  padding-left: 1rem !important;\n}\n\n.bg-blue {\n  background: #2b388f;\n}\n\n.card-container {\n  display: -webkit-box;\n  display: flex;\n  background: #2b388f;\n  width: 100%;\n  height: 70px;\n}\n\n.card-summary {\n  width: 50%;\n  background: #fff;\n  margin: 0.5rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.card-summary img {\n  margin-right: 0.7rem;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n  font-size: 14px;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-slides {\n  background: #e6e6e6;\n  height: 320px;\n  touch-action: pan-x pan-y !important;\n}\n\n.swiper-slide {\n  padding: 1rem 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\ncanvas {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: #fff;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\n.warpper-img {\n  display: block;\n  width: 100%;\n  height: 250px;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10px;\n  background: #f5f5f5;\n}\n\n.warpper-img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.btn-delete-img {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: #fff;\n}\n\n.accordion-list .section, .accordion-list .section-active {\n  --min-height: 58px;\n}\n\n.section {\n  --ion-item-background: #fff;\n  --ion-item-color: #000;\n}\n\n.section-active {\n  --ion-item-background: #ffc400;\n  --ion-item-color: #fff;\n  font-weight: 600;\n}\n\n.section-active ion-icon {\n  color: #fff;\n}\n\n.child-list {\n  padding: 0;\n  margin: 0;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000;\n}\n\n.child-active {\n  --ion-item-background: #fad86b;\n  --ion-item-color: #fff;\n}\n\n.child-active ion-icon {\n  color: #fff;\n}\n\n.product-list {\n  padding: 0;\n  margin: 0;\n}\n\n.header-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #2b388e;\n  color: #fff;\n  padding: 1rem;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0;\n  border-bottom: 1px solid #fff;\n}\n\n.hr {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;\n}\n\nion-button.circle-btn {\n  border-radius: 100% !important;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.btn-smm {\n  background: #2b388e;\n  padding: 0.1rem;\n  border-radius: 3px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  min-width: 24px;\n  width: 24px;\n  height: 25px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 1px;\n  font-size: 13px;\n}\n\n.pd-none {\n  padding: 2px !important;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.btn-remark {\n  background: #2b388e;\n  padding: 0.1rem;\n  border-radius: 3px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  min-width: 24px;\n  width: 24px;\n  height: 25px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 1px;\n  font-size: 13px;\n}\n\n.btn-delete {\n  background: #F04141;\n  padding: 0.1rem;\n  border-radius: 3px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  min-width: 24px;\n  width: 24px;\n  height: 25px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 1px;\n  font-size: 13px;\n}\n\n.pd-3px {\n  padding: 3px;\n}\n\n.pd-0 {\n  padding: 0 !important;\n}\n\ninput[type=checkbox] {\n  transform: scale(1);\n  -ms-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1);\n  -o-transform: scale(1);\n  width: 100%;\n  min-width: 23px;\n  height: 25px;\n  border-radius: 2px !important;\n}\n\n.span-success {\n  font-size: 20px;\n  color: #149747;\n}\n\n.span-fail {\n  font-size: 20px;\n  color: #F04141;\n}\n\n.styleTextCity {\n  color: #898589;\n}\n\n.warpper-sig {\n  display: inline-block;\n  width: 100%;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n}\n\n.warpper-sig img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (max-width: 320px) {\n  .btn-smm, .btn-remark, .btn-delete {\n    padding: 0.1rem;\n    border-radius: 3px;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    min-width: 22px;\n    width: 22px;\n    height: 21px;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-top: 1px;\n    font-size: 13px;\n  }\n\n  input[type=checkbox] {\n    transform: scale(1);\n    -ms-transform: scale(1);\n    -moz-transform: scale(1);\n    -webkit-transform: scale(1);\n    -o-transform: scale(1);\n    width: 100%;\n    min-width: 20px;\n    height: 21px;\n    border-radius: 2px !important;\n  }\n}\n\n.text-center {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdHNjL0RvY3VtZW50cy9Sb2R3b3JrL210c2NkZXYtbW9iaWxlLWVwb2QtV2ljZS9zcmMvYXBwL2RlbGl2ZXIvZGVsaXZlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlbGl2ZXIvZGVsaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsOENBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRElFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUU7RUFDRSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0EsOEJBQUE7QUNGSjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNISjs7QURLRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRElJO0VBQ0Usb0JBQUE7QUNGTjs7QURRQTtFQUNFLDJCQUFBO0FDTEY7O0FEUUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSw0QkFBQTtBQ0xGOztBRFFBO0VBQ0UsNkJBQUE7QUNMRjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBR0Esb0NBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ05KOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQ1pGOztBRGNFO0VBQ0Usa0JBQUE7QUNaSjs7QURnQkE7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0FDYkY7O0FEZUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNaRjs7QURjRTtFQUNFLFdBQUE7QUNaSjs7QURnQkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ2JGOztBRGNFO0VBQ0Usa0JBQUE7QUNaSjs7QURnQkE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ2JGOztBRGVFO0VBQ0UsV0FBQTtBQ2JKOztBRGlCQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDZEY7O0FEaUJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ2RGOztBRGlCQTtFQUNFLDhCQUFBO0FDZEY7O0FEZ0JBO0VBQ0UsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsdUJBQUE7QUNiRjs7QURnQkE7RUFDRSxXQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2JGOztBRGdCQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNiRjs7QURnQkE7RUFDRSxZQUFBO0FDYkY7O0FEZUE7RUFDRSxxQkFBQTtBQ1pGOztBRGNBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDWEY7O0FEY0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRGVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNaRjs7QURnQkE7RUFDRSxjQUFBO0FDYkY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNkRjs7QURlRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2JKOztBRGlCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsMkJBQUE7SUFBQSxvQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNkRjs7RURnQkE7SUFDSSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7SUFDQSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7RUNiSjtBQUNGOztBRGdCQTtFQUNFLDZCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyL2RlbGl2ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtZGF0YS1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtY2FyZC1kaXYge1xuICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xuICBoZWlnaHQ6IDI4MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlMmUyZTIgIWltcG9ydGFudDtcbn1cblxuLmJsdWVzLW5hdiB7XG4gIC0tYmFja2dyb3VuZDogIzJiMzg4Zjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4ubmF2LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wdG4tYnRuIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC13aWRnZXQtaWNvbiBmYS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBEZWxpdmVyIHBhZ2U6IGZvcmNlIElvbkNvbnRlbnQgdG8gYmUgc2Nyb2xsYWJsZSBvbiBBbmRyb2lkXG46aG9zdCB7XG4gIGlvbi1jb250ZW50LmRlbGl2ZXItY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWNvbnRlbnQuZGVsaXZlci1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2ggIWltcG9ydGFudDtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNlYXJjaF9pbnB1dHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmZzLTMwe1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pbnB1dC5zZWFyY2hCdG57XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYmctYmx1ZXtcbiAgYmFja2dyb3VuZDogIzJiMzg4Zjtcbn1cbi5jYXJke1xuICAmLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG4gICYtc3VtbWFyeXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBpbWd7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xuICAgIH1cbiAgfVxufVxuXG5cbi5oZWFkZXIgLmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLXNsaWRlc3tcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgaGVpZ2h0OiAzMjBweDsgLy8g4LmA4Lie4Li04LmI4Lih4LiE4Lin4Liy4Lih4Liq4Li54LiH4LmA4Lie4Li34LmI4Lit4LmD4Lir4LmJ4LmB4Liq4LiU4LiH4Lij4Li54LibXG4gIC8vIEFsbG93IGJvdGggaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgcGFucyBzbyB1c2VyIGNhbiBzd2lwZSBzbGlkZXNcbiAgLy8gd2hpbGUgc3RpbGwgcGVybWl0dGluZyB2ZXJ0aWNhbCBwYWdlIHNjcm9sbCB3aGVuIGFwcHJvcHJpYXRlLlxuICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15ICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ud2FycHBlci1pbWd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyAvLyDguJ7guLfguYnguJnguKvguKXguLHguIfguKrguLXguYDguJfguLLguK3guYjguK3guJlcbiAgaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxufVxuXG4uYnRuLWRlbGV0ZS1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTVweDtcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5cblxuXG5cbi5hY2NvcmRpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIC5zZWN0aW9uLCAuc2VjdGlvbi1hY3RpdmUge1xuICAgIC0tbWluLWhlaWdodDogNThweDtcbiAgfVxufVxuXG4uc2VjdGlvbiB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmYzQwMDtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIC5jaGlsZCwgLmNoaWxkLWFjdGl2ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG5cbi5jaGlsZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2U4ZTdlNjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZhZDg2YjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlci10ZXh0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICMyYjM4OGU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tYnV0dG9uLmNpcmNsZS1idG57XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbn1cbi50ZXh0LXJpZ2h0e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ0bi1zbW17XG4gIGJhY2tncm91bmQ6ICMyYjM4OGU7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wZC1ub25le1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLXJlbWFya3tcbiAgYmFja2dyb3VuZDogIzJiMzg4ZTtcbiAgcGFkZGluZzogMC4xcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bi1kZWxldGV7XG4gIGJhY2tncm91bmQ6ICNGMDQxNDE7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wZC0zcHh7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5wZC0we1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbn1cblxuLnNwYW4tc3VjY2Vzc3tcbiAgZm9udC1zaXplOiAyMHB4IDtcbiAgY29sb3I6ICMxNDk3NDc7XG4gIFxufVxuXG4uc3Bhbi1mYWlse1xuICBmb250LXNpemU6IDIwcHggO1xuICBjb2xvcjogI0YwNDE0MTtcbiAgXG59XG5cbi5zdHlsZVRleHRDaXR5IHtcbiAgY29sb3I6ICM4OTg1ODk7XG59XG5cblxuLndhcnBwZXItc2lne1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcbiAgLmJ0bi1zbW0sLmJ0bi1yZW1hcmssLmJ0bi1kZWxldGV7XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtaW4td2lkdGg6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBpbnB1dFt0eXBlPWNoZWNrYm94XXtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi50ZXh0LWNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59IiwiLmhvbWUtZGF0YS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZS1jYXJkLWRpdiB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGY7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNhcmQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICBoZWlnaHQ6IDE0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmJhY2tncm91bmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2UyZTJlMiAhaW1wb3J0YW50O1xufVxuXG4uYmx1ZXMtbmF2IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmIzODhmO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5uYXYtY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3B0bi1idG4ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLXdpZGdldC1pY29uIGZhLWljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbjpob3N0IGlvbi1jb250ZW50LmRlbGl2ZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1vZmZzZXQtYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQuZGVsaXZlci1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hfaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4uZnMtMzAge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pbnB1dC5zZWFyY2hCdG4ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMmIzODhmO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbn1cbi5jYXJkLXN1bW1hcnkge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQtc3VtbWFyeSBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbn1cblxuLmhlYWRlciAuY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG59XG5cbi5yb3c6bGFzdC1jaGlsZCAuY29sIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teSAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLndhcnBwZXItaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG4ud2FycHBlci1pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idG4tZGVsZXRlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTVweDtcbn1cblxuLmFjY29yZGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWNjb3JkaW9uLWxpc3QgLnNlY3Rpb24sIC5hY2NvcmRpb24tbGlzdCAuc2VjdGlvbi1hY3RpdmUge1xuICAtLW1pbi1oZWlnaHQ6IDU4cHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmM0MDA7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VjdGlvbi1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY2hpbGQtbGlzdCAuY2hpbGQsIC5jaGlsZC1saXN0IC5jaGlsZC1hY3RpdmUge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5jaGlsZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2U4ZTdlNjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZhZDg2YjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcbn1cbi5jaGlsZC1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjMmIzODhlO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWJ1dHRvbi5jaXJjbGUtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuLXNtbSB7XG4gIGJhY2tncm91bmQ6ICMyYjM4OGU7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wZC1ub25lIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tcmVtYXJrIHtcbiAgYmFja2dyb3VuZDogIzJiMzg4ZTtcbiAgcGFkZGluZzogMC4xcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bi1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiAjRjA0MTQxO1xuICBwYWRkaW5nOiAwLjFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucGQtM3B4IHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucGQtMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFuLXN1Y2Nlc3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMTQ5NzQ3O1xufVxuXG4uc3Bhbi1mYWlsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI0YwNDE0MTtcbn1cblxuLnN0eWxlVGV4dENpdHkge1xuICBjb2xvcjogIzg5ODU4OTtcbn1cblxuLndhcnBwZXItc2lnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndhcnBwZXItc2lnIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuYnRuLXNtbSwgLmJ0bi1yZW1hcmssIC5idG4tZGVsZXRlIHtcbiAgICBwYWRkaW5nOiAwLjFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1pbi13aWR0aDogMjJweDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/deliver/deliver.page.ts":
/*!*****************************************!*\
  !*** ./src/app/deliver/deliver.page.ts ***!
  \*****************************************/
/*! exports provided: DeliverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverPage", function() { return DeliverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _select_option_select_option_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../select-option/select-option.page */ "./src/app/select-option/select-option.page.ts");
/* harmony import */ var _success_model_success_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../success-model/success-model.page */ "./src/app/success-model/success-model.page.ts");
/* harmony import */ var _signature_model_signature_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../signature-model/signature-model.page */ "./src/app/signature-model/signature-model.page.ts");
/* harmony import */ var _order_model_order_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../order-model/order-model.page */ "./src/app/order-model/order-model.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _remark_modal_remark_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../remark-modal/remark-modal.page */ "./src/app/remark-modal/remark-modal.page.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _add_drop_add_drop_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../add-drop/add-drop.page */ "./src/app/add-drop/add-drop.page.ts");
/* harmony import */ var _add_order_add_order_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../add-order/add-order.page */ "./src/app/add-order/add-order.page.ts");
/* harmony import */ var _edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../edit-order/edit-order.page */ "./src/app/edit-order/edit-order.page.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");



















let DeliverPage = class DeliverPage {
    constructor(platform, camera, alertContrl, navController, modalCtrl, http, utilservice, route, loadingController, router, qr, activatedroute, actionSheetController, popoverController, sanitizer, authService) {
        this.platform = platform;
        this.camera = camera;
        this.alertContrl = alertContrl;
        this.navController = navController;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.utilservice = utilservice;
        this.route = route;
        this.loadingController = loadingController;
        this.router = router;
        this.qr = qr;
        this.activatedroute = activatedroute;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.ctx = null;
        this.drawing = false;
        this.lastX = 0;
        this.lastY = 0;
        this.automaticClose = false;
        this.showimage = [];
        this.dropnumber = [];
        this.droupArray = [];
        this.selectedColor = "#000000";
        this.lineWidth = 5;
        this.img = null;
        this.checktextinput = false;
        this.status = "00";
        this.note = "";
        this.btn_active = false;
        this.boolhide = false;
        this.ordercount = 0;
        this.sliderOpts = {
            zoom: false,
            slidesPerview: 3,
            centeredSlides: true,
            spaceBetween: 20,
            nested: true,
            touchStartPreventDefault: false,
            touchReleaseOnEdges: true,
        };
        this.accordionExapanded = false;
        this.icon = "arrow-forward";
        this.gettextinput = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let orderList = [];
            for (let i = 0; i < this.utilservice.jobList.length; i++) {
                for (let k = 0; k < this.utilservice.jobList[i].orders.length; k++) {
                    orderList.push(this.utilservice.jobList[i].orders[k]);
                }
            }
            console.log(orderList);
            if (orderList.filter((e) => {
                return e.clienInvoiceNumber == this.textinputcomplete;
            }).length > 0) {
                if (this.utilservice.completejobList.filter((e) => {
                    return e.clienInvoiceNumber == this.textinputcomplete;
                }).length > 0) {
                    const alert = yield this.alertContrl.create({
                        cssClass: "my-custom-class",
                        header: "ผิดพลาด",
                        message: `สแกนซ่ำ`,
                        buttons: ["ตกลง"],
                    });
                    yield alert.present();
                }
                else {
                    orderList = orderList.filter((e) => {
                        return e.clienInvoiceNumber == this.textinputcomplete;
                    });
                    console.log(orderList);
                    for (let j = 0; j < orderList.length; j++) {
                        console.log(orderList[j]);
                        orderList[j].shipping_status_deliver = true;
                        this.utilservice.completejobList.push(orderList[j]);
                    }
                    const alert = yield this.alertContrl.create({
                        cssClass: "my-custom-class",
                        header: "สำเร็จ",
                        message: `เพิ่มรายการสำเร็จ`,
                        buttons: ["ตกลง"],
                    });
                    yield alert.present();
                }
            }
            else {
                const alert = yield this.alertContrl.create({
                    cssClass: "my-custom-class",
                    header: "ผิดพลาด",
                    message: `ไม่ผบข้อมูลหรือยังไม่ได้รับงาน`,
                    buttons: ["ตกลง"],
                });
                yield alert.present();
            }
            this.checktextinput = false;
            this.textinputcomplete = "";
            this.showJoblist();
            if (this.utilservice.completejobList.length == 0) {
                this.boolhide = true;
            }
            else {
                this.boolhide = false;
            }
        });
        this.submit_deliver = (textAlert) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userLogin = yield localStorage.getItem("userLogin");
            yield this.utilservice.getLocationCoordinates();
            if (this.utilservice.imgCompletejobList.length > 0) {
                const alert = yield this.alertContrl.create({
                    cssClass: "my-custom-class",
                    header: "",
                    message: `<div>${textAlert}</div>
      <div>ส่งสำเร็จ ${this.utilservice.ordercount_success},ส่งไม่สำเร็จ ${this.utilservice.ordercount_fail}</div>
      `,
                    buttons: [
                        {
                            text: "ยกเลิก",
                            role: "cancel",
                            handler: (blah) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { }),
                        },
                        {
                            text: "ยืนยัน",
                            handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (this.utilservice.ishidden == false &&
                                    this.utilservice.signatureData == "") {
                                    // const alert = await this.alertContrl.create({
                                    //   cssClass: "my-custom-class",
                                    //   header: "แจ้งเตือน",
                                    //   message: `กรุณากรอกลายเซ็น`,
                                    //   backdropDismiss: false,
                                    //   buttons: [
                                    //     {
                                    //       text: "ตกลง",
                                    //       handler: () => {
                                    //         this.getSignature("eventNotPass");
                                    //       },
                                    //     },
                                    //   ],
                                    // });
                                    // await alert.present();
                                    this.getSignature("eventNotPass");
                                }
                                else {
                                    console.log(this.utilservice.completejobList);
                                    const loading = yield this.loadingController.create({
                                        cssClass: "my-custom-class",
                                        message: "กำลังบันทึกข้อมูล...",
                                    });
                                    yield loading.present();
                                    // Strip data URI prefix from images before sending to API
                                    const base64ImgsOnly = this.utilservice.imgCompletejobList.map(img => this.stripDataUriPrefix(img));
                                    const signatureBase64Only = this.stripDataUriPrefix(this.utilservice.signatureData);
                                    let body = {
                                        orders: this.utilservice.completejobList,
                                        base64Imgs: base64ImgsOnly,
                                        stImgBase64: signatureBase64Only,
                                        lat: `${this.utilservice.locationData.latitude}`,
                                        lng: `${this.utilservice.locationData.longitude}`,
                                    };
                                    console.log(body);
                                    this.http
                                        .post(`${this.utilservice.baseURL}api/DriverJob/CompleteDriverJobs`, body, {
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: `Bearer ${JSON.parse(userLogin)["access_token"]}`,
                                        },
                                    })
                                        .toPromise()
                                        .then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        console.log(val);
                                        if (val.success) {
                                            loading.dismiss();
                                            // await this.downloadMyJob();
                                            this.utilservice.completelist_table = [];
                                            this.utilservice.imgCompletejobList = [];
                                            this.utilservice.completejobList = [];
                                            this.utilservice.signatureData = "";
                                            this.clearCanvas();
                                            this.dropnumber = [];
                                            this.countwork = 0;
                                            this.boolhide = true;
                                            this.showJoblist();
                                            this.openSuccessModel();
                                            // this.router.navigate(["/home"]);
                                        }
                                        else {
                                            loading.dismiss();
                                            const alert = yield this.alertContrl.create({
                                                cssClass: "my-custom-class",
                                                header: "แจ้งเตือน",
                                                message: `${val.message}`,
                                                backdropDismiss: false,
                                                buttons: [
                                                    {
                                                        text: "ตกลง",
                                                        handler: () => {
                                                            this.router.navigate(["/home"]);
                                                        },
                                                    },
                                                ],
                                            });
                                            yield alert.present();
                                        }
                                    }));
                                }
                            }),
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertContrl.create({
                    cssClass: "my-custom-class",
                    header: "",
                    message: `<div>ต้องมีการถ่ายรูปอย่างน้อย 1 รูปภาพ</div>`,
                    buttons: [
                        {
                            text: "ตกลง",
                            // role: "cancel",
                            handler: (blah) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { }),
                        },
                    ],
                });
                yield alert.present();
            }
        });
        this.showJoblist = () => {
            this.ordercount = 0;
            this.utilservice.completelist_table = [];
            this.droupArray = this.utilservice.completejobList
                .map((item) => item.drop_number)
                .filter((value, index, self) => self.indexOf(value) === index);
            for (let i = 0; i < this.droupArray.length; i++) {
                let completejobList_order = this.utilservice.completejobList.filter((e) => {
                    return e.drop_number == this.droupArray[i];
                });
                let completejob_drop = {
                    drop_number: this.droupArray[i],
                    order_count: completejobList_order.length,
                    orders: completejobList_order,
                };
                this.utilservice.completelist_table.push(completejob_drop);
                this.ordercount =
                    this.ordercount +
                        this.utilservice.completelist_table[i].order_count * 1;
            }
            this.utilservice.ordercount_success =
                this.utilservice.completejobList.filter((e) => {
                    return e.shipping_status_deliver == true;
                }).length;
            this.utilservice.ordercount_fail = this.utilservice.completejobList.filter((e) => {
                return e.shipping_status_deliver == false;
            }).length;
            this.checkhtmlshowcanvas();
        };
        this.checkhtmlshowcanvas = () => {
            let countshowcanvas = 0;
            for (let j = 0; j < this.utilservice.completelist_table.length; j++) {
                for (let k = 0; k < this.utilservice.completelist_table[j].orders.length; k++) {
                    if (this.utilservice.completelist_table[j].orders[k]
                        .shipping_status_deliver == true) {
                        countshowcanvas++;
                    }
                }
            }
            if (countshowcanvas > 0) {
                this.utilservice.ishidden = false;
                countshowcanvas = 0;
            }
            else {
                this.utilservice.ishidden = true;
                // Do not clear signature here. Users may sign first and adjust items later;
                // clearing it causes the signature preview to disappear unexpectedly.
            }
        };
        this.downloadStatus = () => {
            let userLogin = localStorage.getItem("userLogin");
            this.http
                .post(`${this.utilservice.baseURL}api/DriverJob/SyncRejectReasons`, ``, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(userLogin)["access_token"],
                },
            })
                .toPromise()
                .then((val) => {
                this.statusall = val;
            });
        };
        this.clearCanvas = () => {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
                // const loading = await this.loadingController.create({
                //   cssClass: "my-custom-class",
                //   message: "กำลังโหลดงานของฉัน...",
                // });
                // await loading.present();
                // await this.utilservice.delay(1000);
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
                        this.utilservice.servicedropcount = 0;
                        this.utilservice.serviceordercount = 0;
                        this.utilservice.jobList = val;
                        console.log(val);
                        this.utilservice.servicedropcount =
                            this.utilservice.jobList.length;
                        for (let i = 0; i < this.utilservice.jobList.length; i++) {
                            for (let j = 0; j < this.utilservice.jobList[i].orders.length; j++) {
                                this.utilservice.serviceordercount =
                                    this.utilservice.serviceordercount + 1;
                            }
                        }
                    }
                    else {
                        this.utilservice.servicedropcount = 0;
                        this.utilservice.serviceordercount = 0;
                    }
                })
                    .catch((reason) => {
                    this.utilservice.jobList = [];
                })
                    .finally(() => {
                    // loading.dismiss();
                });
            }))
                .catch((reason) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log('[Deliver] TokenValidate failed, attempting re-login...', reason);
                yield this.authService.handleTokenError();
            }));
        });
        this.changeCheckbox_Shipping = (i, idx, event, status) => {
            this.utilservice.completelist_table[i].orders[idx].shipping_status_deliver =
                event.target.checked;
            if (this.utilservice.completelist_table[i].orders[idx].shipping_status_deliver) {
                this.utilservice.completelist_table[i].orders[idx].shipping_status_code =
                    "00";
                this.utilservice.completelist_table[i].orders[idx].remark_reason = null;
                this.utilservice.completelist_table[i].orders[idx].rejectReason = null;
            }
            else {
                this.editOrder(i, idx, status);
                if (this.utilservice.completelist_table[i].orders[idx].remark_reason !==
                    null &&
                    this.utilservice.completelist_table[i].orders[idx]
                        .shipping_status_code === "R00") {
                }
            }
            this.utilservice.ordercount_success =
                this.utilservice.completejobList.filter((e) => {
                    return e.shipping_status_deliver == true;
                }).length;
            this.utilservice.ordercount_fail = this.utilservice.completejobList.filter((e) => {
                return e.shipping_status_deliver == false;
            }).length;
            this.checkhtmlshowcanvas();
        };
        activatedroute.params.subscribe((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showJoblist();
        }));
    }
    clearCapturedImages() {
        this.showimage = [];
        this.utilservice.imgCompletejobList = [];
    }
    setQrScanningUi(isScanning) {
        const body = document.getElementsByTagName("body")[0];
        if (!body)
            return;
        body.style.opacity = isScanning ? "0" : "1";
        if (isScanning) {
            body.classList.add("qr-scanning");
            document.documentElement.classList.add("qr-frame");
        }
        else {
            body.classList.remove("qr-scanning");
            document.documentElement.classList.remove("qr-frame");
        }
    }
    stopQrScanning() {
        this.setQrScanningUi(false);
        try {
            this.qr.hide();
        }
        catch (_a) { }
        try {
            this.qr.destroy();
        }
        catch (_b) { }
        try {
            if (this.openCamqrscan) {
                this.openCamqrscan.unsubscribe();
                this.openCamqrscan = null;
            }
        }
        catch (_c) { }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.utilservice.requestGPSPermission();
            // await this.downloadMyJob();
            this.dropnumber = [];
            this.countwork = 0;
            this.countwork = this.utilservice.completejobList.length;
            this.downloadStatus();
            if (this.utilservice.completejobList.length == 0) {
                this.boolhide = true;
            }
            else {
                this.boolhide = false;
            }
            this.showJoblist();
            // Do not restore cached images from UtilService on entry.
            // Images should not persist when navigating away and back to this page.
            this.showimage = [];
            // Ensure we never get stuck in qr-scanning mode (which blocks touch/scroll)
            this.setQrScanningUi(false);
            document.getElementById("chickrefresh").click();
            this.platform.backButton.subscribeWithPriority(0, () => {
                this.stopQrScanning();
            });
            // Force enable scroll
            setTimeout(() => {
                if (this.content) {
                    this.content.scrollY = true;
                    this.content.forceOverscroll = true;
                    // Force scroll events
                    this.content.scrollEvents = true;
                }
            }, 100);
            // Additional force after view init
            setTimeout(() => {
                if (this.content) {
                    this.content.scrollY = true;
                    this.content.forceOverscroll = true;
                }
            }, 500);
        });
    }
    ngOnDestroy() {
        this.stopQrScanning();
        this.clearCapturedImages();
    }
    ionViewWillLeave() {
        // Clear captured images immediately when leaving this page
        // so they won't remain in memory or show up when returning.
        this.clearCapturedImages();
    }
    ngAfterViewInit() {
        // Canvas setup moved to setupCanvas method
    }
    ionViewDidEnter() {
        setTimeout(() => this.setupCanvas(), 100);
    }
    setupCanvas() {
        const canvas = this.canvas.nativeElement;
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        this.canvasElement = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.scale(dpr, dpr);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';
    }
    getXY(ev) {
        const canvas = this.canvas.nativeElement;
        const rect = canvas.getBoundingClientRect();
        const touch = (ev.touches && ev.touches[0]) || (ev.changedTouches && ev.changedTouches[0]);
        const pageX = touch ? touch.pageX : ev.pageX;
        const pageY = touch ? touch.pageY : ev.pageY;
        return { x: pageX - rect.left, y: pageY - rect.top };
    }
    startscanning() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.qr.prepare().then((status) => {
                if (status.authorized) {
                    this.qr.show();
                    this.setQrScanningUi(true);
                    this.openCamqrscan = this.qr.scan().subscribe((textfound) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.stopQrScanning();
                        let orderList = [];
                        for (let i = 0; i < this.utilservice.jobList.length; i++) {
                            for (let k = 0; k < this.utilservice.jobList[i].orders.length; k++) {
                                orderList.push(this.utilservice.jobList[i].orders[k]);
                            }
                        }
                        if (orderList.filter((e) => {
                            return e.clienInvoiceNumber == textfound;
                        }).length > 0) {
                            if (this.utilservice.completejobList.filter((e) => {
                                return e.clienInvoiceNumber == textfound;
                            }).length > 0) {
                                const alert = yield this.alertContrl.create({
                                    cssClass: "my-custom-class",
                                    header: "ผิดพลาด",
                                    message: `สแกนซ่ำ`,
                                    buttons: ["ตกลง"],
                                });
                                yield alert.present();
                            }
                            else {
                                orderList = orderList.filter((e) => {
                                    return e.clienInvoiceNumber == textfound;
                                });
                                for (let j = 0; j < orderList.length; j++) {
                                    orderList[j].shipping_status_deliver = true;
                                    this.utilservice.completejobList.push(orderList[j]);
                                }
                                const alert = yield this.alertContrl.create({
                                    cssClass: "my-custom-class",
                                    header: "สำเร็จ",
                                    message: `เพิ่มรายการสำเร็จ`,
                                    buttons: [
                                        {
                                            text: "ตกลง",
                                            handler: () => {
                                                this.checktextinput = false;
                                                this.showJoblist();
                                                if (this.utilservice.completejobList.length == 0) {
                                                    this.boolhide = true;
                                                }
                                                else {
                                                    this.boolhide = false;
                                                }
                                            },
                                        },
                                    ],
                                });
                                yield alert.present();
                            }
                        }
                        else {
                            const alert = yield this.alertContrl.create({
                                cssClass: "my-custom-class",
                                header: "ผิดพลาด",
                                message: `ไม่ผบข้อมูลหรือยังไม่ได้รับงาน`,
                                buttons: ["ตกลง"],
                            });
                            yield alert.present();
                        }
                        this.checktextinput = false;
                        this.showJoblist();
                        if (this.utilservice.completejobList.length == 0) {
                            this.boolhide = true;
                        }
                        else {
                            this.boolhide = false;
                        }
                    }), (err) => {
                        console.log(err);
                        // Important: always clean up UI state so the app doesn't freeze
                        this.stopQrScanning();
                    });
                }
                else if (status.denied) {
                    this.stopQrScanning();
                }
                else {
                    this.stopQrScanning();
                }
            });
        });
    }
    onChange(status) {
        // if (
        //   this.status.valueOf() == "1" ||
        //   this.status.valueOf() == undefined ||
        //   this.status.valueOf() == "00"
        // ) {
        //   this.utilservice.ishidden = false;
        // } else {
        //   this.utilservice.ishidden = true;
        // }
    }
    delete_item(dataIndex, dropnumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const confirm = yield this.alertContrl.create({
                    header: "ยืนยันการลบ",
                    message: "คุณต้องการลบหรือไม่",
                    buttons: [
                        {
                            text: "ยกเลิก",
                            role: "cancel",
                            handler: () => {
                                return resolve(false);
                            },
                        },
                        {
                            text: "ตกลง",
                            handler: () => {
                                this.utilservice.completelist_table.splice(dataIndex, 1);
                                this.utilservice.completejobList =
                                    this.utilservice.completejobList.filter((e) => {
                                        return e.drop_number != dropnumber;
                                    });
                                this.countwork = this.utilservice.completejobList.length;
                                if (this.utilservice.completejobList.length == 0) {
                                    this.boolhide = true;
                                    this.utilservice.signatureData = "";
                                }
                                else {
                                    this.boolhide = false;
                                }
                                this.showJoblist();
                                console.log(this.utilservice.completelist_table);
                            },
                        },
                    ],
                });
                yield confirm.present();
            }));
        });
    }
    delete_order(i, idx, order_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const confirm = yield this.alertContrl.create({
                    header: "ยืนยันการลบ",
                    message: "คุณต้องการลบหรือไม่",
                    buttons: [
                        {
                            text: "ยกเลิก",
                            role: "cancel",
                            handler: () => {
                                return resolve(false);
                            },
                        },
                        {
                            text: "ตกลง",
                            handler: () => {
                                this.utilservice.completelist_table[i].orders.splice(idx, 1);
                                this.utilservice.completejobList =
                                    this.utilservice.completejobList.filter((e) => {
                                        return e.order_id != order_id;
                                    });
                                this.countwork = this.utilservice.completejobList.length;
                                if (this.utilservice.completejobList.length == 0) {
                                    this.boolhide = true;
                                    this.utilservice.signatureData = "";
                                }
                                else {
                                    this.boolhide = false;
                                }
                                this.showJoblist();
                                console.log(this.utilservice.completelist_table);
                            },
                        },
                    ],
                });
                yield confirm.present();
            }));
        });
    }
    delete_image(index, imgname) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const confirm = yield this.alertContrl.create({
                    header: "ยืนยันการลบ",
                    message: "คุณต้องการลบรูปภาพนี้หรือไม่หรือไม่",
                    buttons: [
                        {
                            text: "ยกเลิก",
                            role: "cancel",
                            handler: () => {
                                return resolve(false);
                            },
                        },
                        {
                            text: "ตกลง",
                            handler: () => {
                                this.utilservice.imgCompletejobList.splice(index, 1);
                                // Sanitize URLs after deletion
                                this.showimage = this.utilservice.imgCompletejobList.map(img => this.sanitizer.bypassSecurityTrustUrl(img));
                            },
                        },
                    ],
                });
                yield confirm.present();
            }));
        });
    }
    Deliver() {
        //this.navController.navigateForward("/deliver");
        this.router.navigate(["/deliver"]);
    }
    DeliverFinish() {
        this.clearCapturedImages();
        this.router.navigate(["/deliver-history"]);
        // this.navController.navigateForward("/deliver-history");
    }
    openSelectPopOver() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _select_option_select_option_page__WEBPACK_IMPORTED_MODULE_1__["SelectOptionPage"],
                cssClass: "my-custom-class",
                translucent: true,
            });
            yield popover.present();
        });
    }
    openPreview(index) {
        // ดึง data URL จริงจาก imgCompletejobList แทน SafeUrl
        const imgDataUrl = this.utilservice.imgCompletejobList[index];
        this.modalCtrl
            .create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_11__["ImageModalPage"],
            componentProps: {
                img: imgDataUrl,
            },
        })
            .then((modal) => modal.present());
    }
    // takePhoto() {
    //   const options: CameraOptions = {
    //     quality: 15,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     correctOrientation: true,
    //   };
    //   this.platform.ready().then(() => {
    //     if (this.platform.is('cordova')) {
    //       this.camera.getPicture(options).then((imageData) => {
    //         // imageData is either a base64 encoded string or a file URI
    //         // If it's base64 (DATA_URL):
    //         let base64Image = 'data:image/jpeg;base64,' + imageData;
    //       }, (err) => {
    //         console.log('เกิดข้อผิดพลาด' + err);
    //         // Handle error
    //       });
    //     }
    //   })
    // }
    takePhoto() {
        if (this.platform.is('cordova')) {
            const options = {
                quality: 15,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
            };
            this.camera.getPicture(options).then((imageData) => {
                // เช็คว่า imageData มี prefix อยู่แล้วหรือไม่
                const dataUrl = imageData.startsWith('data:image')
                    ? imageData
                    : `data:image/jpeg;base64,${imageData}`;
                // Store the complete data URI
                this.utilservice.imgCompletejobList.push(dataUrl);
                // Sanitize URLs for display
                this.showimage = this.utilservice.imgCompletejobList.map(img => this.sanitizer.bypassSecurityTrustUrl(img));
                console.log('Images stored:', this.utilservice.imgCompletejobList);
            }, (err) => {
                console.log('ผิดพลาด: ' + err);
            });
        }
    }
    // Helper method to strip data URI prefix from base64 images
    stripDataUriPrefix(dataUri) {
        if (dataUri && dataUri.startsWith('data:')) {
            return dataUri.split(',')[1];
        }
        return dataUri;
    }
    openModal(i, index) {
        this.modalCtrl
            .create({
            component: _remark_modal_remark_modal_page__WEBPACK_IMPORTED_MODULE_13__["RemarkModalPage"],
            componentProps: {
                remark: this.utilservice.completejobList[index],
            },
        })
            .then((modal) => modal.present());
    }
    openOrderModel(index) {
        this.modalCtrl
            .create({
            component: _order_model_order_model_page__WEBPACK_IMPORTED_MODULE_4__["OrderModelPage"],
            componentProps: {
                remark: this.utilservice.completejobList[index].orders,
            },
        })
            .then((modal) => modal.present());
    }
    startDrawing(ev) {
        const { x, y } = this.getXY(ev);
        this.drawing = true;
        this.lastX = x;
        this.lastY = y;
    }
    endDrawing() {
        this.drawing = false;
    }
    moved(ev) {
        if (!this.drawing)
            return;
        if (ev.preventDefault) {
            ev.preventDefault();
        }
        const { x, y } = this.getXY(ev);
        requestAnimationFrame(() => {
            this.ctx.beginPath();
            this.ctx.moveTo(this.lastX, this.lastY);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
            this.lastX = x;
            this.lastY = y;
        });
    }
    addDropModal() {
        this.modalCtrl
            .create({
            component: _add_drop_add_drop_page__WEBPACK_IMPORTED_MODULE_15__["AddDropPage"],
        })
            .then((modal) => modal.present());
    }
    addOrderModal() {
        this.modalCtrl
            .create({
            component: _add_order_add_order_page__WEBPACK_IMPORTED_MODULE_16__["AddOrderPage"],
        })
            .then((modal) => modal.present());
    }
    editOrder(i, idx, status) {
        this.modalCtrl
            .create({
            component: _edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_17__["EditOrderPage"],
            backdropDismiss: false,
            componentProps: {
                droupindex: i,
                orderindex: idx,
                order: this.utilservice.completelist_table[i].orders[idx],
                checkstatus: status,
            },
        })
            .then((modal) => modal.present());
    }
    getSignature(eventsString) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.modalCtrl
            //   .create({
            //     component: SignatureModelPage,
            //     backdropDismiss: false,
            //     componentProps: {
            //       event: eventsString,
            //     },
            //   })
            //   .then((modal) => modal.present());
            const modal = yield this.modalCtrl.create({
                component: _signature_model_signature_model_page__WEBPACK_IMPORTED_MODULE_3__["SignatureModelPage"],
                backdropDismiss: false,
                componentProps: {
                    event: eventsString,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (eventsString == "eventNotPass" && data.data.checkClose !== "close") {
                    this.submit_deliver("ยืนยันการนำส่ง");
                }
            });
            return yield modal.present();
        });
    }
    historydeliver() {
        this.router.navigate(["/deliver-history"]);
    }
    openSuccessModel() {
        this.modalCtrl
            .create({
            component: _success_model_success_model_page__WEBPACK_IMPORTED_MODULE_2__["SuccessModelPage"],
            backdropDismiss: false,
        })
            .then((modal) => modal.present());
    }
};
DeliverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["QRScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])("imageCanvas", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DeliverPage.prototype, "canvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"])
], DeliverPage.prototype, "content", void 0);
DeliverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: "app-deliver",
        template: __webpack_require__(/*! raw-loader!./deliver.page.html */ "./node_modules/raw-loader/index.js!./src/app/deliver/deliver.page.html"),
        styles: [__webpack_require__(/*! ./deliver.page.scss */ "./src/app/deliver/deliver.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
        _util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["QRScanner"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"]])
], DeliverPage);



/***/ })

}]);
//# sourceMappingURL=deliver-deliver-module-es2015.js.map