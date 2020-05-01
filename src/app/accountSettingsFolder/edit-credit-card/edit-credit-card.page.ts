import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-edit-credit-card',
  templateUrl: './edit-credit-card.page.html',
  styleUrls: ['./edit-credit-card.page.scss'],
})
export class EditCreditCardPage implements OnInit {

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
