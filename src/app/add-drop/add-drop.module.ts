import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDropPageRoutingModule } from './add-drop-routing.module';

import { AddDropPage } from './add-drop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDropPageRoutingModule
  ],
  declarations: [AddDropPage]
})
export class AddDropPageModule {}
