import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduledOrderPageRoutingModule } from './scheduled-order-routing.module';

import { ScheduledOrderPage } from './scheduled-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduledOrderPageRoutingModule
  ],
  declarations: [ScheduledOrderPage]
})
export class ScheduledOrderPageModule {}
