import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusListPageRoutingModule } from './bus-list-routing.module';

import { BusListPage } from './bus-list.page';
import { BusListContentComponent } from 'src/app/all-components/bus-list-content/bus-list-content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BusListPageRoutingModule],
  declarations: [BusListPage, BusListContentComponent],
})
export class BusListPageModule {}
