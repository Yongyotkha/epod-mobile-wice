import { HttpClient } from "@angular/common/http";
import { UtilService } from "./../util.service";
import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavParams,
  AlertController,
  Events,
  Platform,
} from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-order",
  templateUrl: "./edit-order.page.html",
  styleUrls: ["./edit-order.page.scss"],
})
export class EditOrderPage implements OnInit {
  public order: any;
  public dropindex: any;
  public orderindex: any;
  public status: any;
  public note: String = "";
  public checksendsuccess = false;
  public reasonData: any;
  public selectReason: any = "";
  public rejectReasonOther: any = "";
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public utilservice: UtilService,
    public alertContrl: AlertController,
    public platform: Platform,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.dropindex = this.navParams.get("droupindex");
    this.orderindex = this.navParams.get("orderindex");
    this.status = this.navParams.get("checkstatus");
    this.order = this.navParams.get("order");
    await this.downladStatus();
    this.checksendsuccess =
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].shipping_status_deliver;

    this.note =
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].remark_reason;

    if (this.status == "notSuccess") {
      this.selectReason =
        this.utilservice.completelist_table[this.dropindex].orders[
          this.orderindex
        ].shipping_status_code;
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].remark_reason = null;
    }
    if (this.status == "detail") {
      this.selectReason =
        this.utilservice.completelist_table[this.dropindex].orders[
          this.orderindex
        ].shipping_status_code;
      this.note;
    }
    this.rejectReasonOther =
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].rejectReasonOther;
  }

  async dismissModal() {
    this.utilservice.ordercount_success =
      this.utilservice.completejobList.filter((e) => {
        return e.shipping_status_deliver == true;
      }).length;
    this.utilservice.ordercount_fail = this.utilservice.completejobList.filter(
      (e) => {
        return e.shipping_status_deliver == false;
      }
    ).length;
    console.log(
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ]
    );

    if (this.status == "notSuccess") {
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].shipping_status_code = "00";
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].shipping_status_deliver = true;
    }

    if (
      this.selectReason == "R00" &&
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].shipping_status_code !== "R00"
    ) {
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].shipping_status_code = "00";
      this.utilservice.completelist_table[this.dropindex].orders[
        this.orderindex
      ].shipping_status_deliver = true;
    }
    this.utilservice.ordercount_success =
      this.utilservice.completejobList.filter((e) => {
        return e.shipping_status_deliver == true;
      }).length;
    this.utilservice.ordercount_fail = this.utilservice.completejobList.filter(
      (e) => {
        return e.shipping_status_deliver == false;
      }
    ).length;
    this.checkhtmlshowcanvas();
    this.modalCtrl.dismiss();
  }

  async SaveEditOrder() {
    if (this.selectReason == undefined) {
      const alert = await this.alertContrl.create({
        cssClass: "my-custom-class",
        header: "ผิดพลาด",
        message: `กรุณาเลือกหมายเหตุ`,
        buttons: ["ตกลง"],
        backdropDismiss: true,
      });
      await alert.present();
    } else {
      if (this.note == "" || this.note == null) {
        if (this.checksendsuccess != true && this.selectReason == "R00") {
          const alert = await this.alertContrl.create({
            cssClass: "my-custom-class",
            header: "ผิดพลาด",
            message: `กรุณากรอกหมายเหตุ`,
            buttons: ["ตกลง"],
          });
          await alert.present();
        } else {
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].remark_reason = this.note;

          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].shipping_status_deliver = this.checksendsuccess;

          if (
            this.utilservice.completelist_table[this.dropindex].orders[
              this.orderindex
            ].shipping_status_deliver
          ) {
            this.utilservice.completelist_table[this.dropindex].orders[
              this.orderindex
            ].shipping_status_code = "00";
            this.utilservice.completelist_table[this.dropindex].orders[
              this.orderindex
            ].rejectReason = null;
            this.utilservice.completelist_table[this.dropindex].orders[
              this.orderindex
            ].rejectReasonOther = this.rejectReasonOther;
          } else {
            this.utilservice.completelist_table[this.dropindex].orders[
              this.orderindex
            ].shipping_status_code = this.selectReason;

            for (let i = 0; i < this.reasonData.reasons.length; i++) {
              if (this.selectReason == this.reasonData.reasons[i].code) {
                this.utilservice.completelist_table[this.dropindex].orders[
                  this.orderindex
                ].rejectReason = this.reasonData.reasons[i].name;
              }
            }
            this.utilservice.completelist_table[this.dropindex].orders[
              this.orderindex
            ].rejectReasonOther = null;
          }
          this.checkhtmlshowcanvas();
          this.modalCtrl.dismiss();
        }
      } else {
        if (this.selectReason == "R00") {
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].remark_reason = this.note;
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].rejectReasonOther = null;
        } else {
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].remark_reason = null;
        }
        this.utilservice.completelist_table[this.dropindex].orders[
          this.orderindex
        ].shipping_status_deliver = this.checksendsuccess;
        if (
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].shipping_status_deliver
        ) {
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].shipping_status_code = "00";
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].rejectReason = null;
        } else {
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].shipping_status_code = this.selectReason;
          for (let i = 0; i < this.reasonData.reasons.length; i++) {
            if (this.selectReason == this.reasonData.reasons[i].code) {
              this.utilservice.completelist_table[this.dropindex].orders[
                this.orderindex
              ].rejectReason = this.reasonData.reasons[i].name;
            }
          }
          this.utilservice.completelist_table[this.dropindex].orders[
            this.orderindex
          ].rejectReasonOther = null;
        }
        this.checkhtmlshowcanvas();
        this.modalCtrl.dismiss();
      }
    }
    console.log(this.utilservice.completejobList);
  }

  public changeCheckbox = (event) => {
    this.checksendsuccess = event.target.checked;
    if (this.checksendsuccess) {
      this.selectReason = "00";
    }
    console.log(this.utilservice.completelist_table.length);
  };

  public checkhtmlshowcanvas = () => {
    let countshowcanvas = 0;

    for (let j = 0; j < this.utilservice.completelist_table.length; j++) {
      for (
        let k = 0;
        k < this.utilservice.completelist_table[j].orders.length;
        k++
      ) {
        if (
          this.utilservice.completelist_table[j].orders[k]
            .shipping_status_deliver == true
        ) {
          countshowcanvas++;
        }
      }
    }
    if (countshowcanvas > 0) {
      this.utilservice.ishidden = false;
      countshowcanvas = 0;
    } else {
      this.utilservice.ishidden = true;
    }
    this.utilservice.ordercount_success =
      this.utilservice.completejobList.filter((e) => {
        return e.shipping_status_deliver == true;
      }).length;
    this.utilservice.ordercount_fail = this.utilservice.completejobList.filter(
      (e) => {
        return e.shipping_status_deliver == false;
      }
    ).length;
  };

  public async downladStatus() {
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
        this.reasonData = val;
      });
  }
}
