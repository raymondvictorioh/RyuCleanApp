import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from '../../order-entity.service'

@Component({
  selector: 'app-order-preference',
  templateUrl: './order-preference.page.html',
  styleUrls: ['./order-preference.page.scss'],
})
export class OrderPreferencePage implements OnInit {

      submitted: boolean;
      newOrder: OrderEntity;

      resultSuccess: boolean;
      resultError: boolean;
      message: string;

      constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private OrderEntityService: OrderEntityService) { 
          this.submitted = false;
          this.newOrder = new OrderEntity ();
          this.resultSuccess = false; 
          this.resultError = false;
        }

      ngOnInit() {

      }

      clear (){
        this.submitted = false;
        this.newOrder.notes = "";

      }

      goBack(){
        //this.router.navigateByUrl();
      }

      preference(preferenceForm: NgForm){

        let dataString = JSON.stringify(this.newOrder);
        this.router.navigate(['payment', dataString]);

      }

}
