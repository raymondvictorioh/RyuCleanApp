import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UtilityService } from '../utility.service';
import { CreditCard } from '../credit-card';
import { ModalController } from '@ionic/angular';
import { ViewJobDetailsPage } from '../systemAdministration/view-job-details/view-job-details.page';
import { EditContactNumberPage } from '../accountSettingsFolder/edit-contact-number/edit-contact-number.page';
import { EditNamePage } from '../accountSettingsFolder/edit-name/edit-name.page';
import { EditCreditCardPage } from '../accountSettingsFolder/edit-credit-card/edit-credit-card.page';
import { EditPasswordPage } from '../accountSettingsFolder/edit-password/edit-password.page';
import { EditFullNamePage } from '../accountSettingsFolder/edit-full-name/edit-full-name.page';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  cusId: number;
  customer: Customer;
  retrieveCustomerError: boolean;
  error: boolean;
  errorMessage: string;
  customerCreditCards: CreditCard[];

  constructor(private router: Router, private customerService: CustomerService, public utilityService: UtilityService, public modalController: ModalController) {
    this.retrieveCustomerError = false;
    this.error = false;
  }


  async presentModalFullName() {
    const modal = await this.modalController.create({
      component: EditFullNamePage
    });



    return await modal.present();
  }

  async presentModalUsername() {
    const modal = await this.modalController.create({
      component: EditNamePage
    });
    return await modal.present();
  }

  async presentModalPassword() {
    const modal = await this.modalController.create({
      component: EditPasswordPage
    });
    return await modal.present();
  }

  async presentContactNum() {
    const modal = await this.modalController.create({
      component: EditContactNumberPage
    });
    return await modal.present();
  }

  async presentModalCreditCard() {
    const modal = await this.modalController.create({
      component: EditCreditCardPage
    });
    return await modal.present();
  }





  ngOnInit() {
    console.log("Initialised")
    console.log(this.utilityService.getCurrentCustomer().cusId);
    console.log(this.utilityService.getCurrentCustomer());
    this.cusId = this.utilityService.getCurrentCustomer().cusId;
    this.customer = this.utilityService.getCurrentCustomer();
    console.log(this.customer.username);
    console.log(this.customer.password);
    console.log(this.customer.contactNum);

    // this.refreshCustomerDetails();

  }

  ionViewWillEnter() {
    this.refreshCustomerDetails();
  }

  back() {
    this.router.navigate(["/settings"]);
  }



  refreshCustomerDetails() {
    console.log("refresh Customer Details");
    this.customerService.retrieveCustomerByCustomerId(this.utilityService.getCurrentCustomer().cusId).subscribe(
      response => {
        this.customer = response.customer;
        this.utilityService.setCurrentCustomer(response.customer);
      },
      error => {
        this.errorMessage = error;
      }
    )
  }

}


