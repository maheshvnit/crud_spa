import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPageDeleteUserPage } from './modal-page-delete-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPageDeleteUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPageDeleteUserPage]
})
export class ModalPageDeleteUserPageModule {}
