import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemarkModalPageRoutingModule } from './remark-modal-routing.module';

import { RemarkModalPage } from './remark-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemarkModalPageRoutingModule
  ],
  declarations: [RemarkModalPage]
})
export class RemarkModalPageModule {}
