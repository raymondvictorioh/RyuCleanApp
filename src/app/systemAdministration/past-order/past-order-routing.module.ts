import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastOrderPage } from './past-order.page';

const routes: Routes = [
  {
    path: '',
    component: PastOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastOrderPageRoutingModule {}
