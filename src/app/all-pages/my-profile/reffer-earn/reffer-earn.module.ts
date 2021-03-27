import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefferEarnPageRoutingModule } from './reffer-earn-routing.module';

import { RefferEarnPage } from './reffer-earn.page';
import { RefferEarnContentComponent } from 'src/app/all-components/my-profile-content/reffer-earn-content/reffer-earn-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefferEarnPageRoutingModule
  ],
  declarations: [RefferEarnPage, RefferEarnContentComponent]
})
export class RefferEarnPageModule {}
