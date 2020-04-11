import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPreferencePageRoutingModule } from './order-preference-routing.module';

import { OrderPreferencePage } from './order-preference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPreferencePageRoutingModule
  ],
  declarations: [OrderPreferencePage]
})
export class OrderPreferencePageModule {}
