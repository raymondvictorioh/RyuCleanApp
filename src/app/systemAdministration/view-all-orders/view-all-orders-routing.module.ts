import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllOrdersPage } from './view-all-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllOrdersPage,
    children:
      [
        {
          path: '',
          redirectTo: '../past-order/past-order.module#PastOrderPageModule',
          pathMatch: 'full'
        },
        {
          path: 'pastOrder',
          children: [
            {
              path: '',
              loadChildren: '../past-order/past-order.module#PastOrderPageModule'
            }
          ]
        },
        {
          path: 'scheduledOrder',
          children: [
            {
              path: '',
              loadChildren: '../scheduled-order/scheduled-order.module#ScheduledOrderPageModule'
            }
          ]
        }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllOrdersPageRoutingModule { }
