import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessModelPageRoutingModule } from './success-model-routing.module';

import { SuccessModelPage } from './success-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    SuccessModelPageRoutingModule
  ],
  declarations: [SuccessModelPage]
})
export class SuccessModelPageModule {}
