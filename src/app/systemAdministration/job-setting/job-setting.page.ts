import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/job';
import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from "../../order-entity.service";
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { GenderEnum } from 'src/app/gender-enum.enum';
import { JobService } from 'src/app/job.service';


@Component({
  selector: 'app-job-setting',
  templateUrl: './job-setting.page.html',
  styleUrls: ['./job-setting.page.scss'],
})
export class JobSettingPage implements OnInit {

  submitted: boolean;
  newOrder: OrderEntity;
  jobList: Job[];
  resultSuccess: boolean;
  resultError: boolean;
  message: string;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderEntityService: OrderEntityService,
    private jobService: JobService) {

    this.jobList = new Array();
    this.submitted = false;
    this.resultSuccess = false;
    this.resultError = false;

    this.jobList = jobService.getCurrentJobList();


  }

  clear() {
    this.submitted = false;

  }

  setDate(event, job) {
    this.jobService.setCurrentJob(job);
    this.router.navigateByUrl("date-setting");
  }

  setOrderPreference() {
    // console.log(this.orderEntityService.getCurrentOrderEntity().planId);
    // this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    this.jobService.setCurrentJobList(this.jobList);
    console.log(this.orderEntityService.getCurrentOrderEntity().planId);
    console.log("*** jobs list length : " + this.jobService.getCurrentJobList().length);

    this.router.navigateByUrl("orderPreference");
  }

  ngOnInit() {

    console.log("****** first job date" + this.jobList[0].jobDate);
  }

}