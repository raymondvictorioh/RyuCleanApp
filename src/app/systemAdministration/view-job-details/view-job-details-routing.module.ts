import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewJobDetailsPage } from './view-job-details.page';



const routes: Routes = [
  {
    path: '',
    component: ViewJobDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewJobDetailsPageRoutingModule { }
