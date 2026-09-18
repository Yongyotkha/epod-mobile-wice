import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-modal',
  templateUrl: './deliver-modal.page.html',
  styleUrls: ['./deliver-modal.page.scss'],
})
export class DeliverModalPage implements OnInit {
  public orderdata: any;

  constructor(
    private router: Router,
    private modalCtrl:ModalController,
    private navParams:NavParams
    ) 
    { }

  ngOnInit() {
    this.orderdata = this.navParams.get('orders');
    console.log(this.orderdata)
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  Deliver() {
    this.modalCtrl.dismiss();
    this.router.navigate(["/deliver"]);
  }
}
