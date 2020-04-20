import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UtilityService } from '../utility.service';
import { CreditCard } from '../credit-card';
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

  constructor(private router: Router, private customerService: CustomerService, public utilityService: UtilityService) {
    this.retrieveCustomerError = false;
    this.error = false;
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

    this.refreshCustomerDetails();

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
      },
      error => {
        this.errorMessage = error;
      }
    )
  }

}


