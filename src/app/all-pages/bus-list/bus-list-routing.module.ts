import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusListPage } from './bus-list.page';

const routes: Routes = [
  {
    path: '',
    component: BusListPage,
    // children: [
    //   {
    //     path: 'bus-details',
    //     loadChildren: () =>
    //       import('./bus-details/bus-details.module').then(
    //         (m) => m.BusDetailsPageModule
    //       ),
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/bus-list/bus-details',
    //     pathMatch: 'full',
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusListPageRoutingModule {}
