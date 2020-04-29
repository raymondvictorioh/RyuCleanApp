import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCreditCardPageRoutingModule } from './edit-credit-card-routing.module';

import { EditCreditCardPage } from './edit-credit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCreditCardPageRoutingModule
  ],
  declarations: [EditCreditCardPage]
})
export class EditCreditCardPageModule {}
