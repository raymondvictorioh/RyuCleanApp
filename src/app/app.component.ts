import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilityService } from './utility.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public utilityService: UtilityService,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    console.log('********** AppComponent.ngOnInit()');

    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.updateMainMenu();
  }

  onActivate(componentReference) {
    console.log('********** AppComponent.onActivate: ' + componentReference.componentType);
    this.updateMainMenu();
  }

  ionViewDidEnter() {
    console.log("IONVIEWDIDENTER")
    if (this.utilityService.getIsLogin() == false) {

      this.menuCtrl.enable(false);
    } else {
      this.menuCtrl.enable(true);
    }
  }

  updateMainMenu() {
    console.log("utilt get is login() : " + this.utilityService.getIsLogin());

    console.log(this.utilityService.getIsLogin());
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Create Order',
        url: '/packages',
        icon: 'happy'
      },
      {
        title: 'Order History',
        url: '/viewAllOrders',
        icon: 'list-circle'
      },
      {
        title: 'Settings',
        url: '/settings',
        icon: 'settings'
      }
    ]





  }


}
