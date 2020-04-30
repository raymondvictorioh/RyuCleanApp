import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateSettingPageRoutingModule } from './date-setting-routing.module';

import { DateSettingPage } from './date-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateSettingPageRoutingModule
  ],
  declarations: [DateSettingPage]
})
export class DateSettingPageModule {}
