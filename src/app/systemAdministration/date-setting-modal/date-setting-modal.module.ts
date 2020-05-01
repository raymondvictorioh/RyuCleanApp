import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateSettingModalPageRoutingModule } from './date-setting-modal-routing.module';

import { DateSettingModalPage } from './date-setting-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateSettingModalPageRoutingModule
  ],
  declarations: [DateSettingModalPage]
})
export class DateSettingModalPageModule {}
