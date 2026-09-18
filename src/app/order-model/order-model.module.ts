import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderModelPageRoutingModule } from './order-model-routing.module';

import { OrderModelPage } from './order-model.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    IonicModule,
    OrderModelPageRoutingModule
  ],
  declarations: [OrderModelPage]
})
export class OrderModelPageModule {}
