import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobSettingPage } from './job-setting.page';

const routes: Routes = [
  {
    path: '',
    component: JobSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobSettingPageRoutingModule {}
