import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GMapModule } from 'primeng/gmap';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Calendar } from '@ionic-native/calendar/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { ViewJobDetailsPageModule } from './systemAdministration/view-job-details/view-job-details.module';
import { DateSettingModalPageModule} from "./systemAdministration/date-setting-modal/date-setting-modal.module";



// import { EditContactNumberModule } from './accountSettingsFolder/edit-contact-number/edit-contact-number.module';
import { BarcodeModalPageModule } from './systemAdministration/barcode-modal/barcode-modal.module';
import { EditNamePageModule } from './accountSettingsFolder/edit-name/edit-name.module';
import { EditCreditCardPageModule } from './accountSettingsFolder/edit-credit-card/edit-credit-card.module';
import { EditPasswordPageModule } from './accountSettingsFolder/edit-password/edit-password.module';
import { EditContactNumberPageModule } from './accountSettingsFolder/edit-contact-number/edit-contact-number.module';
import { EditFullNamePageModule } from './accountSettingsFolder/edit-full-name/edit-full-name.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GMapModule,
    NgxQRCodeModule,
    IonicStorageModule.forRoot(),
    ViewJobDetailsPageModule,
    BarcodeModalPageModule,
    DateSettingModalPageModule,
    EditNamePageModule,
    EditCreditCardPageModule,
    EditPasswordPageModule,
    EditContactNumberPageModule,
    EditFullNamePageModule
  ],


    providers: [
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      BarcodeScanner,
      Calendar,
      DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
