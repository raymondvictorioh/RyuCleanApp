import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CustomerService } from '../../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../../customer';
import { UtilityService } from '../../utility.service';
@Component({
  selector: 'app-edit-full-name',
  templateUrl: './edit-full-name.page.html',
  styleUrls: ['./edit-full-name.page.scss'],
})
export class EditFullNamePage implements OnInit {

  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  customerToUpdate: Customer;
  errorMessage: string;
  constructor(private utilityService: UtilityService, private modalController: ModalController, private navParams: NavParams, private customerService: CustomerService) { }

  ngOnInit() {
    console.log("EDIT FULLNAME");
    console.log("asd");
    this.refreshCustomerDetails();

  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  update(updateCustomerForm: NgForm) {
    if (updateCustomerForm.valid) {
      this.customerService.updateCustomer().subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Password updated successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating the product: " + error;

          console.log('********** UpdateProductComponent.ts: ' + error);
        }
      )
    }
  }

  refreshCustomerDetails() {
    console.log("refresh Customer Details");
    this.customerService.retrieveCustomerByCustomerId(this.utilityService.getCurrentCustomer().cusId).subscribe(
      response => {
        this.customerToUpdate = response.customer;
      },
      error => {
        this.errorMessage = error;
      }
    )
    // console.log(this.customerToUpdate);
    // console.log(this.customerToUpdate.lastName);
    // console.log(this.customerToUpdate.firstName);
  }
}