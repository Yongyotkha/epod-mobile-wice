import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DeliverHistoryPage } from './deliver-history.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path:'',
        component:DeliverHistoryPage
      }
    ])
    
  ],
  declarations: [DeliverHistoryPage]
})
export class DeliverHistoryPageModule {}
