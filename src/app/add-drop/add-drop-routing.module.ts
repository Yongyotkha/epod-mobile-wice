import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDropPage } from './add-drop.page';

const routes: Routes = [
  {
    path: '',
    component: AddDropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDropPageRoutingModule {}
