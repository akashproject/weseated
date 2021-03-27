import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';

import { WalletPage } from './wallet.page';
import { WalletContentComponent } from 'src/app/all-components/my-profile-content/wallet-content/wallet-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPageRoutingModule
  ],
  declarations: [WalletPage, WalletContentComponent]
})
export class WalletPageModule {}
