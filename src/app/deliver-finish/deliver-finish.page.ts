import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deliver-finish',
  templateUrl: './deliver-finish.page.html',
  styleUrls: ['./deliver-finish.page.scss'],
})
export class DeliverFinishPage implements OnInit {

  constructor(
    public navController : NavController,
  ) { }

  ngOnInit() {
  }

  Home() {
    this.navController.navigateForward("/home");
  }


}
