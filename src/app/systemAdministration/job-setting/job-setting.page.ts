import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/job';
import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from "../../order-entity.service";
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
    private activatedRoute: ActivatedRoute,
    private orderEntityService: OrderEntityService) {

    this.jobList = new Array();
    this.submitted = false;
    this.resultSuccess = false;
    this.resultError = false;

    let numberOfTimes: number;
    console.log(FrequencyEnum.DAILY);
    this.newOrder = orderEntityService.getCurrentOrderEntity();
    console.log(this.newOrder.freqencyEnum);
    if(this.newOrder.freqencyEnum == FrequencyEnum.DAILY){
      numberOfTimes = 1;
    } else if (this.newOrder.freqencyEnum == FrequencyEnum.REGULAR){
      numberOfTimes = 6;
    } else {
      numberOfTimes = 12;
    }

    for (var _i = 0; _i < numberOfTimes; _i++) {
      this.jobList.push(new Job(_i, null, this.newOrder, new Date(), new Date()));
    }

  }

  clear() {
    this.submitted = false;

  }

  setDate() {
    this.router.navigateByUrl("calendar");
  }

  setOrderPreference(){
    this.orderEntityService.setCurrentOrderEntity(this.newOrder);
    this.router.navigateByUrl("orderPreference");
  }

  ngOnInit() {
  }

}