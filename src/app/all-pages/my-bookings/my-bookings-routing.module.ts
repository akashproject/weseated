import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBookingsPage } from './my-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: MyBookingsPage,
    children:[
      {
        path: 'booked',
        loadChildren: () => import('./booked/booked.module').then( m => m.BookedPageModule)
      },
      {
        path: 'cancelled',
        loadChildren: () => import('./cancelled/cancelled.module').then( m => m.CancelledPageModule)
      },
      {
        path: '',
        redirectTo: '/my-bookings/booked',
        pathMatch: 'full'
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBookingsPageRoutingModule {}
