import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { websiteRoutes } from '@website/const/website.routes';

const routes: Routes = [
  {
    path: websiteRoutes.main,
    loadChildren: () => import('@website/routes/main-page/main-page.module').then( module => module.MainPageModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, { initialNavigation: 'enabled' } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
