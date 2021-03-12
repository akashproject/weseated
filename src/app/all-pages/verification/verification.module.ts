import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';

import { VerificationPage } from './verification.page';
import { VerificationContentComponent } from 'src/app/all-components/verification-content/verification-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationPageRoutingModule
  ],
  declarations: [VerificationPage, VerificationContentComponent]
})
export class VerificationPageModule {}
