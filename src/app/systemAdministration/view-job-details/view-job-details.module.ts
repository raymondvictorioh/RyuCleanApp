import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewJobDetailsPageRoutingModule } from './view-job-details-routing.module';

import { ViewJobDetailsPage } from './view-job-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewJobDetailsPageRoutingModule
  ],
  declarations: [ViewJobDetailsPage]
})
export class ViewJobDetailsPageModule {}
