import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelledPageRoutingModule } from './cancelled-routing.module';

import { CancelledPage } from './cancelled.page';
import { CancelledContentComponent } from 'src/app/all-components/my-bookings-content/cancelled-content/cancelled-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelledPageRoutingModule
  ],
  declarations: [CancelledPage, CancelledContentComponent]
})
export class CancelledPageModule {}
