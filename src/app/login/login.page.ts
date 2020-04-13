import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {UtilityService} from '../utility.service';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted: boolean;
  username: string;
  password: string;
  loginError: boolean;
  errorMessage: string;

  constructor(private router: Router,
    public utilityService: UtilityService,
    private customerService: CustomerService) {
    this.submitted = false;
  }


  ngOnInit() {
  }

  clear() {
    this.username = "";
    this.password = "";
  }

  customerLogin(customerLoginForm: NgForm) {
    this.submitted = true;
    if (customerLoginForm.valid) {
      this.utilityService.setUsername(this.username);
      this.utilityService.setPassword(this.password);

      this.customerService.customerLogin(this.username, this.password).subscribe(
        response => {
          let customer: Customer = response.customer;
          if (customer != null) {
            this.utilityService.setIsLogin(true);
            this.utilityService.setCurrentCustomer(customer);
            this.loginError = false;
          } else {
            this.loginError = true;
          }
        },
        error => {
          this.loginError = true;
          this.errorMessage = error
        }
      );
    } else {

    }
  }

  customerLogout(): void {
    this.utilityService.setIsLogin(false);
    this.utilityService.setCurrentCustomer(null);
  }

  back() {
    this.router.navigate(["/home"]);
  }

}
