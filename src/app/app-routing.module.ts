import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'modal-page-loading', loadChildren: './modal-page-loading/modal-page-loading.module#ModalPageLoadingPageModule' },
  { path: 'modal-page-create-user', loadChildren: './modal-page-create-user/modal-page-create-user.module#ModalPageCreateUserPageModule' },
  { path: 'modal-page-edit-user', loadChildren: './modal-page-edit-user/modal-page-edit-user.module#ModalPageEditUserPageModule' },
  { path: 'modal-page-delete-user', loadChildren: './modal-page-delete-user/modal-page-delete-user.module#ModalPageDeleteUserPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
