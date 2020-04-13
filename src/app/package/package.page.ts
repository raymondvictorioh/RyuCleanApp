import { Component, OnInit } from '@angular/core';

import { PlanService } from '../plan.service';
import {Plan} from '../plan';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {

  plans : Plan[];
  errorMessage: string;

  constructor(private planService : PlanService) {

   }

  ngOnInit() {
    this.planService.getPlans().subscribe(
      response => {
        this.plans = response.plans;
      },
      error=>{
        this.errorMessage = error
      }
    );
  }

}
