import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignatureModelPageRoutingModule } from './signature-model-routing.module';

import { SignatureModelPage } from './signature-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    SignatureModelPageRoutingModule
  ],
  declarations: [SignatureModelPage]
})
export class SignatureModelPageModule {}
