import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./all-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./all-pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./all-pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./all-pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'my-bookings',
    loadChildren: () => import('./all-pages/my-bookings/my-bookings.module').then( m => m.MyBookingsPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./all-pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  }
  
  
 
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
