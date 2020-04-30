import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditContactNumberPageRoutingModule } from './edit-contact-number-routing.module';

import { EditContactNumberPage } from './edit-contact-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditContactNumberPageRoutingModule
  ],
  declarations: [EditContactNumberPage]
})
export class EditContactNumberPageModule {}
