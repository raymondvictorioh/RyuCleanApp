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
  imageSrc = "assets/pkg_placeholder.jpg";
  img="sample.png"
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


  selectFrequency(event, plan) {

    console.log("*******plan Id****** " + plan.planId);

    this.router.navigate(['/frequency/' + plan.planId]);
  }

}
