import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UtilityService } from '../utility.service';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { MenuController } from '@ionic/angular';



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
  cusId: number;

  constructor(private router: Router,
    public utilityService: UtilityService,
    private customerService: CustomerService, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'custom');
    this.submitted = false;
  }


  ngOnInit() { }


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
            console.log(this.utilityService.getCurrentCustomer().firstName);
            console.log(this.utilityService.getCurrentCustomer().cusId);
            this.loginError = false;
          } else {
            this.loginError = true;
          }
          this.router.navigateByUrl('/home');
        },
        error => {
          this.loginError = true;
          this.errorMessage = error
        }
      );
      // this.router.navigate(["home"]);
    } else {

    }

    this.menuCtrl.enable(true, 'custom');
  }



  customerLogout(): void {
    this.utilityService.setIsLogin(false);
    this.utilityService.setCurrentCustomer(null);
    this.menuCtrl.enable(false, 'custom');
    console.log("is Log out : " + this.utilityService.getIsLogin())
  }
  customerRegister() {
    this.router.navigate(["register"])
  }
  back() {
    this.router.navigate(["home"]);
  }

}
