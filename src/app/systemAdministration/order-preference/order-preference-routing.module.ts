import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPreferencePage } from './order-preference.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPreferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPreferencePageRoutingModule {}
