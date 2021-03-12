import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBookingsPageRoutingModule } from './my-bookings-routing.module';

import { MyBookingsPage } from './my-bookings.page';
import { MyBookingsContentComponent } from 'src/app/all-components/my-bookings-content/my-bookings-content.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBookingsPageRoutingModule
  ],
  declarations: [MyBookingsPage, MyBookingsContentComponent]
})
export class MyBookingsPageModule {}
