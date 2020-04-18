import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { PlanService } from '../../plan.service';
import { Plan } from '../../plan';


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

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private planService: PlanService, public alertControler: AlertController) {
    this.retrievePlanError = false;
    this.error = false;
  }

  ngOnInit() {
    this.planId = parseInt(this.activatedRoute.snapshot.paramMap.get('planId'));
    this.refreshPlan();
    console.log("test I AM AT FREQUENCY PAGE " + this.planId);
  }

  ionViewWillEnter() {
    this.refreshPlan();
  }

  refreshPlan() {
    console.log("REFRESH PLAN");
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

  back() {
    this.router.navigate(["packages"]);
    console.log(this.planToView.dailyPrice)
    console.log(this.planToView.planName);
  }


}
