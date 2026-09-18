import { CompletejobQrscannerComponent } from './completejob-qrscanner/completejob-qrscanner.component';
import { GetjobQrscannerComponent } from './getjob-qrscanner/getjob-qrscanner.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'getjob',
    loadChildren: () => import('./getjob/getjob.module').then(m => m.GetjobPageModule)
  },
  {
    path: 'deliver',
    loadChildren: () => import('./deliver/deliver.module').then(m => m.DeliverPageModule)
  },
  {
    path: 'deliver-finish',
    loadChildren: () => import('./deliver-finish/deliver-finish.module').then(m => m.DeliverFinishPageModule)
  },
  {
    path: 'deliver-history',
    loadChildren: () => import('./deliver-history/deliver-history.module').then(m => m.DeliverHistoryPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./image-modal/image-modal.module').then(m => m.ImageModalPageModule)
  },
  {
    path: 'remark-modal',
    loadChildren: () => import('./remark-modal/remark-modal.module').then(m => m.RemarkModalPageModule)
  },
  {
    path: 'getjob-qrscanner',
    component: GetjobQrscannerComponent,
  },
  {
    path: 'completejob-qrscanner',
    component: CompletejobQrscannerComponent,
  },
  {
    path: 'order-model',
    loadChildren: () => import('./order-model/order-model.module').then(m => m.OrderModelPageModule)
  },
  {
    path: 'deliver-modal',
    loadChildren: () => import('./deliver-modal/deliver-modal.module').then(m => m.DeliverModalPageModule)
  },
  {
    path: 'add-drop',
    loadChildren: () => import('./add-drop/add-drop.module').then(m => m.AddDropPageModule)
  },
  {
    path: 'add-order',
    loadChildren: () => import('./add-order/add-order.module').then(m => m.AddOrderPageModule)
  },
  {
    path: 'edit-order',
    loadChildren: () => import('./edit-order/edit-order.module').then(m => m.EditOrderPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'repassword-modal',
    loadChildren: () => import('./repassword-modal/repassword-modal.module').then(m => m.RepasswordModalPageModule)
  },
  {
    path: 'signature-model',
    loadChildren: () => import('./signature-model/signature-model.module').then(m => m.SignatureModelPageModule)
  },
  {
    path: 'success-model',
    loadChildren: () => import('./success-model/success-model.module').then(m => m.SuccessModelPageModule)
  },
  {
    path: 'select-option',
    loadChildren: () => import('./select-option/select-option.module').then(m => m.SelectOptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
