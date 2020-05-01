import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateSettingModalPage } from './date-setting-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DateSettingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateSettingModalPageRoutingModule {}
