import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFullNamePage } from './edit-full-name.page';

const routes: Routes = [
  {
    path: '',
    component: EditFullNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFullNamePageRoutingModule {}
