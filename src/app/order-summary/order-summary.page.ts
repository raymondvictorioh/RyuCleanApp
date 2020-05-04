import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, ActivationStart } from '@angular/router';
import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from "src/app/order-entity.service";
import { UtilityService } from 'src/app/utility.service';
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { GenderEnum } from 'src/app/gender-enum.enum';
import { Customer } from 'src/app/customer';
import { Job } from 'src/app/job';
import { PlanService } from 'src/app/plan.service';
import { Plan } from 'src/app/plan';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {


  newOrder: OrderEntity;
  username: string;
  planId: number;
  customerId: number;
  jobs: Job[];
  customer: Customer
  totalNumCleaning: string;
  planToView: Plan;
  selectedFreq: string;
  totalPrice: number;
  pricePerCleaning: number

  constructor(private router: Router, private orderEntityService: OrderEntityService,
    private utilityService: UtilityService, private planService: PlanService, ) {

  }


  @ViewChild(RouterOutlet, { static: false }) outlet: RouterOutlet;

  ngOnInit(): void {
    // this.router.events.subscribe(e => {
    //   if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
    //     this.outlet.deactivate();
    // });
    this.newOrder = this.orderEntityService.getCurrentOrderEntity();
    this.planId = this.newOrder.planId;
    // console.log("***" + this.newOrder.orderId);
    // console.log(this.newOrder.plan.planName);
    // console.log(this.newOrder.plan.planDescription);
    // console.log(this.newOrder.plan.dailyPrice);
    // console.log(this.newOrder.totalPrice);
    this.customer = this.utilityService.getCurrentCustomer();
    this.refreshPlan();

  }

  refreshPlan() {
    console.log("REFRESH PLAN");
    this.planService.getPlanByPlanId(this.planId).subscribe(
      response => {
        console.log(response.plan.planName);
        this.planToView = response.plan;


        if (this.newOrder.freqencyEnum == 'DAILY') {
          console.log("DAILY");
          this.pricePerCleaning = this.planToView.dailyPrice;
          this.totalPrice = this.planToView.dailyPrice;
          this.totalNumCleaning = "1"
        } else if (this.newOrder.freqencyEnum == 'REGULAR') {
          console.log("REGULAR");
          this.pricePerCleaning = this.planToView.dailyPrice;
          this.totalPrice = this.planToView.regularPrice * 6;
          this.totalNumCleaning = "6"

        } else if (this.newOrder.freqencyEnum == 'MEMBER') {
          console.log("MEMBER");
          this.pricePerCleaning = this.planToView.dailyPrice;
          this.totalPrice = this.planToView.memberPrice * 12;
          this.totalNumCleaning = "12"

        }
        console.log("PRICE TO SHOW" + this.pricePerCleaning);

      }, error => {

        console.log("******* Frequency (View Plan) + error");
      }
    )
    // this.getPrice(this.planToView);
  }

  back() {
    this.router.navigate(["orderPreference"]);
    console.log(this.planToView.dailyPrice)
    console.log(this.planToView.planName);
  }



  proceed() {
    let dataString = JSON.stringify(this.newOrder);
    this.router.navigate(['payment', dataString]);
  }

}
