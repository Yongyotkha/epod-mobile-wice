import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-drop',
  templateUrl: './add-drop.page.html',
  styleUrls: ['./add-drop.page.scss'],
})
export class AddDropPage implements OnInit {

  constructor(
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  addDrop() {
    this.modalCtrl.dismiss();
  }

}
