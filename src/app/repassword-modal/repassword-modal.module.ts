import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { RepasswordModalPageRoutingModule } from './repassword-modal-routing.module';

import { RepasswordModalPage } from './repassword-modal.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RepasswordModalPageRoutingModule
    RouterModule.forChild([
      {
        path: '',
        component: RepasswordModalPage
      }
    ]),
  ],
  declarations: [RepasswordModalPage],

})
export class RepasswordModalPageModule { }
