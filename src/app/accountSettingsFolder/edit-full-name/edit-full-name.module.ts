import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFullNamePageRoutingModule } from './edit-full-name-routing.module';

import { EditFullNamePage } from './edit-full-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFullNamePageRoutingModule
  ],
  declarations: [EditFullNamePage]
})
export class EditFullNamePageModule {}
