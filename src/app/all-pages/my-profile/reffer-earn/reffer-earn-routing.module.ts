import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefferEarnPage } from './reffer-earn.page';

const routes: Routes = [
  {
    path: '',
    component: RefferEarnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefferEarnPageRoutingModule {}
