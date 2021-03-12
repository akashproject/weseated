import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedPageRoutingModule } from './booked-routing.module';

import { BookedPage } from './booked.page';
import { BookedContentComponent } from 'src/app/all-components/my-bookings-content/booked-content/booked-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedPageRoutingModule
  ],
  declarations: [BookedPage, BookedContentComponent]
})
export class BookedPageModule {}
