import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateSettingPage } from './date-setting.page';

const routes: Routes = [
  {
    path: '',
    component: DateSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateSettingPageRoutingModule {}
