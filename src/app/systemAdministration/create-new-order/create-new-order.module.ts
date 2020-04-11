import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewOrderPageRoutingModule } from './create-new-order-routing.module';

import { CreateNewOrderPage } from './create-new-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewOrderPageRoutingModule
  ],
  declarations: [CreateNewOrderPage]
})
export class CreateNewOrderPageModule {}
