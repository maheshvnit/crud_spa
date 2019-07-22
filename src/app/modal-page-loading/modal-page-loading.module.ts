import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPageLoadingPage } from './modal-page-loading.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPageLoadingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPageLoadingPage]
})
export class ModalPageLoadingPageModule {}
