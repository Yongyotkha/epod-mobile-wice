import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-remark-modal',
  templateUrl: './remark-modal.page.html',
  styleUrls: ['./remark-modal.page.scss'],
})
export class RemarkModalPage implements OnInit {

  public remarkdata:any

  constructor(private modalCtrl:ModalController,private navParams:NavParams,) {}

  ngOnInit() {
    this.remarkdata = this.navParams.get('remark');
    console.log(this.remarkdata);
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
