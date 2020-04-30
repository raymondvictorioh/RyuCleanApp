import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

import { NgForm } from '@angular/forms';


import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from '../../order-entity.service'
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { GenderEnum } from 'src/app/gender-enum.enum';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  @ViewChild(RouterOutlet, { static: false }) outlet: RouterOutlet;

  constructor(private router: Router,
    //private activatedRoute: ActivatedRoute,
    private orderEntityService: OrderEntityService) {
    this.submitted = false;
    // this.newOrder = new OrderEntity();

    this.newOrder = orderEntityService.getCurrentOrderEntity();
    this.resultSuccess = false;
    this.resultError = false;
  }

  ionViewDidEnter() {

  }

  ngOnInit(): void {

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
  }

  clear() {
    this.submitted = false;
    this.newOrder.notes = "";

  }

  goBack() {
    //this.router.navigateByUrl();
  }

  preference(preferenceForm: NgForm) {
    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    // console.log(this.orderEntityService.getCurrentOrderEntity().freqencyEnum);
    console.log("*** " + this.newOrder.freqencyEnum);
    console.log("***" + this.orderEntityService.getCurrentOrderEntity().freqencyEnum);
    let dataString = JSON.stringify(this.newOrder);
    this.router.navigate(['payment', dataString]);

  }

}
