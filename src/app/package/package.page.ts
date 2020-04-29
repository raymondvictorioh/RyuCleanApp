import { Component, OnInit } from '@angular/core';

import { PlanService } from '../plan.service';
import { Plan } from '../plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {

  plans: Plan[];
  errorMessage: string;

  constructor(private router: Router, private planService: PlanService) {

  }



  ngOnInit() {
    this.refreshPlans();
  }

  ionViewWillEnter() {
    this.refreshPlans();
  }

  refreshPlans() {
    this.planService.getPlans().subscribe(
      response => {
        this.plans = response.plans;
      },
      error => {
        this.errorMessage = error
      }
    );
  }

  test() {
    console.log("HOHOHO")
  }

  selectFrequency(event, plan) {
    console.log("testttt");
    console.log("plan Id " + plan.planId);
    
    this.router.navigate(['/frequency/' + plan.planId]);
  }

}
