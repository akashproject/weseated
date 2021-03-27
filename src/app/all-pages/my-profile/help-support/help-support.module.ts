import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpSupportPageRoutingModule } from './help-support-routing.module';

import { HelpSupportPage } from './help-support.page';
import { HelpSupportContentComponent } from 'src/app/all-components/my-profile-content/help-support-content/help-support-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpSupportPageRoutingModule
  ],
  declarations: [HelpSupportPage, HelpSupportContentComponent]
})
export class HelpSupportPageModule {}
