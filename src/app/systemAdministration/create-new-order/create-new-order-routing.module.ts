import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewOrderPage } from './create-new-order.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewOrderPageRoutingModule {}
