import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { EditProfileContentComponent } from 'src/app/all-components/my-profile-content/edit-profile-content/edit-profile-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule
  ],
  declarations: [EditProfilePage, EditProfileContentComponent]
})
export class EditProfilePageModule {}
