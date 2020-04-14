import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/job';
import { OrderEntity } from 'src/app/order-entity';
import { FrequencyEnum } from 'src/app/frequency-enum.enum';


@Component({
  selector: 'app-job-setting',
  templateUrl: './job-setting.page.html',
  styleUrls: ['./job-setting.page.scss'],
})
export class JobSettingPage implements OnInit {

    submitted: boolean;
    newOrder = new OrderEntity (1,null, null, null, FrequencyEnum.DAILY, "zipcode?: string",
      "genderPreference?: string", "notes?: string");
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
       //let newOrder = this.activatedRoute.snapshot.paramMap.get('newOrder');
    //if newOrder.frequn  --thus creating the number of jobs on the spot.
    let numberOfTimes: number;
    if (this.newOrder.freqencyEnum == FrequencyEnum.DAILY){
      numberOfTimes = 1;
    } else if (this.newOrder.freqencyEnum == FrequencyEnum.REGULAR){
      numberOfTimes = 12;
    } else {
      numberOfTimes = 24;
    }

    for (var _i = 0; _i < numberOfTimes; _i++) {
      this.jobList. push(new Job (_i,null,this.newOrder,new Date (),false));
      //var num = numbers[_i];
      
  }
    console.log(this.jobList.length);
    console.log(this.newOrder);
     }

  clear (){
      this.submitted = false;
      //this.newJob = new Job();

    }

  setDate(){
    this.router.navigateByUrl("calendar");
    }

  ngOnInit() {
   
  }

}