import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditContactNumberPage } from './edit-contact-number.page';

const routes: Routes = [
  {
    path: '',
    component: EditContactNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditContactNumberPageRoutingModule {}
