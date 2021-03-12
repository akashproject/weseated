import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeContentComponent } from 'src/app/all-components/home-content/home-content.component';
import { TitleComponent } from 'src/app/all-components/home-content/title/title.component';
import { SearchBarComponent } from 'src/app/all-components/home-content/search-bar/search-bar.component';
import { CategoryTabComponent } from 'src/app/all-components/home-content/category-tab/category-tab.component';
import { OferCardComponent } from 'src/app/all-components/home-content/ofer-card/ofer-card.component';
import { TabMenuComponent } from 'src/app/all-components/home-content/category-tab/tab-menu/tab-menu.component';
import { LocationDetailsComponent } from 'src/app/all-components/home-content/category-tab/location-details/location-details.component';
import { LocationComponent } from 'src/app/all-components/home-content/category-tab/location/location.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HomeContentComponent,
    TitleComponent,
    SearchBarComponent,
    CategoryTabComponent,
    TabMenuComponent,
    LocationDetailsComponent,
    LocationComponent,
    OferCardComponent
  ]
})
export class HomePageModule {}
