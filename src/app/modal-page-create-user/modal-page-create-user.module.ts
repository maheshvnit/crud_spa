import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPageCreateUserPage } from './modal-page-create-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPageCreateUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPageCreateUserPage]
})
export class ModalPageCreateUserPageModule {}
