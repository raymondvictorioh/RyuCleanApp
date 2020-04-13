import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UtilityService } from '../utility.service';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitted: boolean;
  registerError: boolean;
  message: string;
  username: string;
  password: string;
  resultSuccess: boolean;
  resultError: boolean;
  newCustomer: Customer;

  constructor(private router: Router, public utilityService: UtilityService,
    private customerService: CustomerService) {
    this.submitted = false;
    this.newCustomer = new Customer();
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
  }

  clear() {
    this.submitted = false;
    this.newCustomer = new Customer();
  }

  register(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.utilityService.setUsername(this.username);
      this.utilityService.setPassword(this.password);

      this.customerService.createNewCustomer(this.newCustomer).subscribe(
        response => {
          let newCustomerId: number = response.cusId;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New Account " + newCustomerId + " created successfully";

          this.newCustomer = new Customer();
          this.submitted = false;

        }, error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occured while creating account : " + error;
          console.log('********** CreateNewCustomerPage.ts: ' + error);
        }
      )
    }
  }

}
