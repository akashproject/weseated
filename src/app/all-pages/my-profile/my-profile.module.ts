import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { MyProfileContentComponent } from 'src/app/all-components/my-profile-content/my-profile-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfilePageRoutingModule
  ],
  declarations: [MyProfilePage, MyProfileContentComponent]
})
export class MyProfilePageModule {}
