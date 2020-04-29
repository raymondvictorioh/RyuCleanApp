import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeModalPageRoutingModule } from './barcode-modal-routing.module';

import { BarcodeModalPage } from './barcode-modal.page';
import { NgxQRCodeModule } from 'ngx-qrcode2'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeModalPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [BarcodeModalPage]
})
export class BarcodeModalPageModule {}
