import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bike',
    loadChildren: () => import('./bike/bike.module').then((b) => b.BikeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((l) => l.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
