import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCreditCardPage } from './edit-credit-card.page';

const routes: Routes = [
  {
    path: '',
    component: EditCreditCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCreditCardPageRoutingModule {}
