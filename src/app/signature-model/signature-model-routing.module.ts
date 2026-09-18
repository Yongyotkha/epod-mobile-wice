import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignatureModelPage } from './signature-model.page';

const routes: Routes = [
  {
    path: '',
    component: SignatureModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignatureModelPageRoutingModule {}
