import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  constructor(private router: Router, public menuCtrl: MenuController, private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async continueToLogin() {
    await this.storage.set('slidersComplete', true);
    this.router.navigate(["login"]);
  }

}
