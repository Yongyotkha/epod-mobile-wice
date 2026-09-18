import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderModelPage } from './order-model.page';

const routes: Routes = [
  {
    path: '',
    component: OrderModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderModelPageRoutingModule {}
