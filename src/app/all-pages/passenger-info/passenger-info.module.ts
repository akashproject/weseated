import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerInfoPageRoutingModule } from './passenger-info-routing.module';

import { PassengerInfoPage } from './passenger-info.page';
import { AddPassengersComponent } from 'src/app/all-components/add-passengers/add-passengers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerInfoPageRoutingModule,
  ],
  declarations: [PassengerInfoPage, AddPassengersComponent],
})
export class PassengerInfoPageModule {}
