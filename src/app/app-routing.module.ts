import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./all-pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./all-pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./all-pages/verification/verification.module').then(
        (m) => m.VerificationPageModule
      ),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./all-pages/notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: 'my-bookings',
    loadChildren: () =>
      import('./all-pages/my-bookings/my-bookings.module').then(
        (m) => m.MyBookingsPageModule
      ),
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./all-pages/my-profile/my-profile.module').then(
        (m) => m.MyProfilePageModule
      ),
  },
  {
    path: 'bus-list',
    loadChildren: () =>
      import('./all-pages/bus-list/bus-list.module').then(
        (m) => m.BusListPageModule
      ),
  },
  {
    path: 'bus-detail/:id',
    loadChildren: () =>
      import('./all-pages/bus-details/bus-details.module').then(
        (m) => m.BusDetailsPageModule
      ),
  },
  {
    path: 'passenger-info',
    loadChildren: () =>
      import('./all-pages/passenger-info/passenger-info.module').then(
        (m) => m.PassengerInfoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
