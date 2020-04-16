import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduledOrderPage } from './scheduled-order.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduledOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduledOrderPageRoutingModule {}
