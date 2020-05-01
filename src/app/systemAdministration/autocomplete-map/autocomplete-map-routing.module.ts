import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteMapPage } from './autocomplete-map.page';

const routes: Routes = [
  {
    path: '',
    component: AutocompleteMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocompleteMapPageRoutingModule {}
