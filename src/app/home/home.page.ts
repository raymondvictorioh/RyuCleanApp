import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, public utilityService: UtilityService, public menuCtrl: MenuController) { }

  ngOnInit() {
    console.log('********** HomePage.ngOnInit()');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  customerLogout(): void {
    this.utilityService.setIsLogin(false);
    this.utilityService.setCurrentCustomer(null);
    this.router.navigateByUrl('login');
    this.menuCtrl.enable(false);
  }

}
