import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusDetailsPageRoutingModule } from './bus-details-routing.module';

import { BusDetailsPage } from './bus-details.page';
import { BusDetailsContentComponent } from 'src/app/all-components/bus-details-content/bus-details-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusDetailsPageRoutingModule,
  ],
  declarations: [BusDetailsPage, BusDetailsContentComponent],
})
export class BusDetailsPageModule {}
