import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutocompleteMapPageRoutingModule } from './autocomplete-map-routing.module';

import { AutocompleteMapPage } from './autocomplete-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutocompleteMapPageRoutingModule
  ],
  declarations: [AutocompleteMapPage]
})
export class AutocompleteMapPageModule {}
