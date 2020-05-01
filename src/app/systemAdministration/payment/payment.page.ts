import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, ActivationStart } from '@angular/router';

import { NgForm } from '@angular/forms';

import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from "../../order-entity.service";
import { CreditCard } from 'src/app/credit-card';
import { UtilityService } from 'src/app/utility.service';
import { JobService } from 'src/app/job.service';
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { GenderEnum } from 'src/app/gender-enum.enum';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  submitted: boolean;
  newOrder: OrderEntity;
  newCreditCard: CreditCard;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  persistedOrderId: number;

  constructor(private router: Router,
    //private activatedRoute: ActivatedRoute,
    private OrderEntityService: OrderEntityService,
    private utilityService: UtilityService,
    private jobService: JobService) {
    this.submitted = false;

    this.resultSuccess = false;
    this.resultError = false;
    this.newCreditCard = new CreditCard();
    this.newOrder = this.OrderEntityService.getCurrentOrderEntity();
    console.log(this.newOrder.notes);
  }

  @ViewChild(RouterOutlet, { static: false }) outlet: RouterOutlet;

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
  }


  goBack() {
    //this.router.navigateByUrl();
  }

  clear() {
    this.submitted = false;
    this.newCreditCard = new CreditCard();
  }

  payment(paymentForm: NgForm) {

    this.OrderEntityService.setCurrentOrderEntity(this.newOrder);
    this.createNewOrder();


  }

  createNewOrder() {
    this.submitted = true;


    console.log(this.newOrder.planId);
    console.log("frequency enum type: " + typeof this.newOrder.freqencyEnum);
    console.log("frequency enum: " + this.newOrder.freqencyEnum);
    console.log("gender enum type: " + typeof this.newOrder.genderPreference);
    console.log("gender enum: " + this.newOrder.genderPreference);

    let username = this.utilityService.getUsername();
    let password = this.utilityService.getPassword();
    let planId = 1;
    let customerId = this.utilityService.getCurrentCustomer().cusId;
    let jobs = this.jobService.getCurrentJobList();

    this.OrderEntityService.createNewOrder(username, password, planId, customerId, jobs, this.newOrder).subscribe(
      response => {
        let orderEntityId: number = response.newOrderId;
        this.persistedOrderId = orderEntityId;
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "New Order " + orderEntityId + " created successfully";
        console.log(this.message);

        this.router.navigate(['/success/' + orderEntityId]);
        // this.router.navigateByUrl('success');

        console.log(this.newCreditCard.expirationDate);
        this.submitted = true;


      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while creating the new product: " + error;

        console.log('********** CreateNewProductPage.ts: ' + error);
      }

    );

  }

}
