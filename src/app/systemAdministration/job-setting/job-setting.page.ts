import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/job';
import { OrderEntity } from 'src/app/order-entity';
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { GenderEnum } from 'src/app/gender-enum.enum';


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
    private activatedRoute: ActivatedRoute) {

    this.jobList = new Array();
    this.submitted = false;
    this.resultSuccess = false;
    this.resultError = false;

    let numberOfTimes: number;
    console.log(FrequencyEnum.DAILY);
    this.newOrder = new OrderEntity(1, null, null, null, FrequencyEnum.DAILY, "zipcode?: string",
      GenderEnum.MALE, "notes?: string");
    console.log(this.newOrder.freqencyEnum);

    if (this.newOrder.freqencyEnum == FrequencyEnum.DAILY) {
      numberOfTimes = 1;
    } else if (this.newOrder.freqencyEnum == FrequencyEnum.REGULAR) {
      numberOfTimes = 12;
    } else {
      numberOfTimes = 24;
    }

    for (var _i = 0; _i < numberOfTimes; _i++) {
      this.jobList.push(new Job(_i, null, this.newOrder, new Date()));
    }

  }

  clear() {
    this.submitted = false;
    //this.newJob = new Job();

  }

  setDate() {
    this.router.navigateByUrl("calendar");
  }

  ngOnInit() {
  }

}