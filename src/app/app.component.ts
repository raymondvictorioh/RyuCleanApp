import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'home'
    }
    // },
    // {
    //   title: 'New Order',
    //   url: '/createNewOrder',
    //   icon: 'create'
    // },
    // {
    //   title: 'View All Order',
    //   url: '/viewAllOrders',
    //   icon: 'albums'
    // },
    // {
    //   title: 'Map',
    //   url: '/viewMap',
    //   icon: 'albums'
    // },


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public utilityService: UtilityService
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

  updateMainMenu() {
    if (this.utilityService.getIsLogin()) {
      console.log(this.utilityService.getIsLogin());
      this.appPages = [
        {
          title: 'Homexxx',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Logout',
          url: '/login',
          icon: 'exit'
        }
      ]
    } else {
      this.appPages = [
        {
          title: 'Homeeee',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Login',
          url: '/login',
          icon: 'exit'
        }
      ]
    }
  }
}
