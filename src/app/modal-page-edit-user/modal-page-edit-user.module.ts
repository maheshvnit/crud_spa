import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPageEditUserPage } from './modal-page-edit-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPageEditUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPageEditUserPage]
})
export class ModalPageEditUserPageModule {}
