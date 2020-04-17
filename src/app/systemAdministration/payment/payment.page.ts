import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, ActivationStart } from '@angular/router';

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
      newOrder: OrderEntity;
      newCreditCard : CreditCard;

      resultSuccess: boolean;
      resultError: boolean;
      message: string;

      constructor(private router: Router,
        //private activatedRoute: ActivatedRoute,
        private OrderEntityService: OrderEntityService) { 
          this.submitted = false;

          this.resultSuccess = false; 
          this.resultError = false;
          this.newCreditCard = new CreditCard();
          this.newOrder = this.OrderEntityService.getCurrentOrderEntity();
          console.log(this.newOrder.notes);
        }

        @ViewChild(RouterOutlet, {static: false}) outlet: RouterOutlet;

        ngOnInit(): void {
          this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
              this.outlet.deactivate();
          });
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
        console.log(this.newCreditCard.expirationDate);
        this.submitted = true;
        
      }

}
