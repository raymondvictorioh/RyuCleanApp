import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobSettingPageRoutingModule } from './job-setting-routing.module';

import { JobSettingPage } from './job-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobSettingPageRoutingModule
  ],
  declarations: [JobSettingPage]
})
export class JobSettingPageModule {}
