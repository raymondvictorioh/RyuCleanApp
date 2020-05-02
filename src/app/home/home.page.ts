import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { MenuController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverPage } from '../systemAdministration/popover/popover.page'
import { PopoverPageModule } from '../systemAdministration/popover/popover.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, public utilityService: UtilityService, public menuCtrl: MenuController,
    private popoverController: PopoverController) {
    this.menuCtrl.enable(true, "custom");
  }

  ngOnInit() {
    console.log('********** HomePage.ngOnInit()');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    console.log("current user is : " + this.utilityService.getCurrentCustomer());
  }

  customerLogout(): void {
    this.utilityService.setIsLogin(false);
    this.utilityService.setCurrentCustomer(null);
    this.menuCtrl.enable(false, 'custom');
    console.log("is Logged In : " + this.utilityService.getIsLogin())
    this.router.navigate(["/login"]);

  }

  directToOrder() {
    this.router.navigate(["/packages"]);
  }

  async openPopOver(ev: Event){
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    popover.present();
  }



}
