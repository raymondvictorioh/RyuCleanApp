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
    console.log(this.jobList[0].jobDate);


  }

  clear() {
    this.submitted = false;

  }

  setDate(event, job) {
    this.jobService.setCurrentJob(job);
    this.router.navigateByUrl("date-setting");
  }

  setOrderPreference(){
    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    this.jobService.setCurrentJobList(this.jobList);
    this.router.navigateByUrl("orderPreference");
  }

  ngOnInit() {
  }

}