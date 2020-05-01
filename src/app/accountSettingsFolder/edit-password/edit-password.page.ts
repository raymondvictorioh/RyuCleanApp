import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CustomerService } from '../../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../../customer';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.page.html',
  styleUrls: ['./edit-password.page.scss'],
})
export class EditPasswordPage implements OnInit {

  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  customerToUpdate: Customer;

  constructor(private utilityService: UtilityService, private modalController: ModalController, private navParams: NavParams, private customerService: CustomerService) { }

  ngOnInit() {
    console.log("asd");
    this.customerToUpdate = this.utilityService.getCurrentCustomer();
    console.log(this.utilityService.getPassword());
    console.log(this.customerToUpdate);
    console.log(this.customerToUpdate.username);
    console.log(this.customerToUpdate.password);
    console.log(this.customerToUpdate.firstName);
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


}
