import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bike.component';
// import { MngBkComponent } from './mng-bk/mng-bk.component';

const routes: Routes = [
  {
    path: '',
    component: BikeComponent,
  },
  // {
  //   path: 'mng-bike',
  //   component: MngBkComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeRoutingMododule {}
