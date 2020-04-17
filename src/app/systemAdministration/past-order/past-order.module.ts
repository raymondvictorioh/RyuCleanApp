import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastOrderPageRoutingModule } from './past-order-routing.module';

import { PastOrderPage } from './past-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastOrderPageRoutingModule
  ],
  declarations: [PastOrderPage]
})
export class PastOrderPageModule {}
