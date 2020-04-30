import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { PlanService } from '../../plan.service';
import { Plan } from '../../plan';
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { OrderEntityService } from "../../order-entity.service";
import { OrderEntity } from 'src/app/order-entity';


@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.page.html',
  styleUrls: ['./frequency.page.scss'],
})
export class FrequencyPage implements OnInit {

  planId: number;
  planToView: Plan;
  retrievePlanError: boolean;
  error: boolean;
  errorMessage: string;
  frequencyEnum: FrequencyEnum;
  newOrder: OrderEntity = new OrderEntity();

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private planService: PlanService,
    public alertControler: AlertController,
    public orderEntityService: OrderEntityService) {

    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    this.retrievePlanError = false;
    this.error = false;
  }

  ngOnInit() {
    this.planId = parseInt(this.activatedRoute.snapshot.paramMap.get('planId'));
    this.refreshPlan();
    console.log("test... i selected plan ID : " + this.planId);
  }

  ionViewWillEnter() {
    this.refreshPlan();
  }

  refreshPlan() {
    this.planService.getPlanByPlanId(this.planId).subscribe(
      response => {
        this.planToView = response.plan;
      }, error => {
        this.retrievePlanError = true;
        console.log("******* Frequency (View Plan) + error");
      }
    )
    console.log("Can get the plan");

  }

  viewMapDaily(event) {
    this.newOrder.freqencyEnum = FrequencyEnum.DAILY;
    this.newOrder.planId = this.planId;
<<<<<<< HEAD
    console.log(this.newOrder.freqencyEnum);
    console.log(this.newOrder.planId + "gfgfgfgfgfgfgf");
=======

>>>>>>> 5fda31f47441507974329955ec2fed2f4da55763
    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    console.log("****** freq enum : " + this.orderEntityService.getCurrentOrderEntity().freqencyEnum + " ******");
    console.log("****** planId : " + this.orderEntityService.getCurrentOrderEntity().planId + " ******");
    this.router.navigateByUrl("address");
  }

  viewMapRegular(event) {
    this.newOrder.freqencyEnum = FrequencyEnum.REGULAR;
    this.newOrder.planId = this.planId;

    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    console.log("****** freq enum : " + this.orderEntityService.getCurrentOrderEntity().freqencyEnum + " ******");
    console.log("****** planId : " + this.orderEntityService.getCurrentOrderEntity().planId + " ******");
    this.router.navigateByUrl("address");
  }

  viewMapMember(event) {
    this.newOrder.freqencyEnum = FrequencyEnum.MEMBER;
    this.newOrder.planId = this.planId;
    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    console.log("****** freq enum : " + this.orderEntityService.getCurrentOrderEntity().freqencyEnum + " ******");
    console.log("****** planId : " + this.orderEntityService.getCurrentOrderEntity().planId + " ******");
    this.router.navigateByUrl("address");
  }


  back() {
    this.router.navigate(["packages"]);
    console.log(this.planToView.dailyPrice)
    console.log(this.planToView.planName);
  }


}
