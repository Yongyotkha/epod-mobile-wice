import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-order-model',
  templateUrl: './order-model.page.html',
  styleUrls: ['./order-model.page.scss'],
})
export class OrderModelPage implements OnInit {

  public orderdata:any

  constructor(private modalCtrl:ModalController,private navParams:NavParams) { }

  ngOnInit() {
    this.orderdata = this.navParams.get('orders');
    console.log(this.orderdata);
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
