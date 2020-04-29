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

// import { EditContactNumberModule } from './accountSettingsFolder/edit-contact-number/edit-contact-number.module';

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
    ViewJobDetailsPageModule
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
