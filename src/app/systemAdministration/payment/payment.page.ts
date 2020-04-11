import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from "../../order-entity.service";
import { CreditCard } from 'src/app/credit-card';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  
      submitted: boolean;
      //newOrder: OrderEntity;
      newCreditCard : CreditCard;

      resultSuccess: boolean;
      resultError: boolean;
      message: string;

      constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private OrderEntityService: OrderEntityService) { 
          this.submitted = false;

          this.resultSuccess = false; 
          this.resultError = false;
          this.newCreditCard = new CreditCard();
        }

      ngOnInit() {
        let newOrder = this.activatedRoute.snapshot.paramMap.get('newOrder');
        console.log(newOrder);
      }

      goBack(){
        //this.router.navigateByUrl();
      }

      clear(){
        this.submitted = false;
        this.newCreditCard = new CreditCard();
      }

      payment(paymentForm: NgForm){

        this.router.navigateByUrl('success');
        this.submitted = true;
        
      }

}
