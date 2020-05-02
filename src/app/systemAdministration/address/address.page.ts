import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GMapModule } from 'primeng/gmap';

import { AlertController } from '@ionic/angular';
import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from 'src/app/order-entity.service';
import { FrequencyEnum } from 'src/app/frequency-enum.enum';
import { Job } from 'src/app/job';
import { JobService } from 'src/app/job.service';
import { JobStatusEnum } from 'src/app/job-status-enum.enum';


@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  /*error: boolean;
	errorMessage: string;
    

  ngOnInit() {
  }*/
  //<p-gmap #gmap [style]="{'width':'100%','height':'320px', 'margin-bottom': '1em'}"></p-gmap>

  newOrder: OrderEntity;
  address: string;
  retrievePlanError: boolean;
  error: boolean;
  jobList: Job[] = new Array();
  roadname: string = "";
  unitNumber: string = "";
  postalCode: string = "";
  buildingName: string = "";


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public gmap: GMapModule,
    private orderEntityService: OrderEntityService,
    private jobService: JobService) {

    this.newOrder = orderEntityService.getCurrentOrderEntity();
    this.retrievePlanError = false;
    this.error = false;

  }

  setAddress(event) {
    this.newOrder.zipcode = this.unitNumber+ " " +this.buildingName+" " +this.roadname+" " +this.postalCode;
    console.log(this.newOrder.zipcode);
    this.orderEntityService.setCurrentOrderEntity(this.newOrder);

    console.log(this.orderEntityService.getCurrentOrderEntity().zipcode);

    let numberOfTimes: number;


    if (this.newOrder.freqencyEnum == FrequencyEnum.DAILY) {
      numberOfTimes = 1;
    } else if (this.newOrder.freqencyEnum == FrequencyEnum.REGULAR) {
      numberOfTimes = 6;
    } else {
      numberOfTimes = 12;
    }

    for (var _i = 0; _i < numberOfTimes; _i++) {
      this.jobList.push(new Job (null, null, null, new Date (), new Date ()));//new Job(_i, null, this.newOrder, null, null));
    }
    this.jobService.setCurrentJobList(this.jobList);


    this.router.navigateByUrl("orderPreference");

  }

  ionViewDidLeave() {
    console.log("**********");
    console.log("current order plan : " + this.orderEntityService.getCurrentOrderEntity().planId);
    console.log("current order address : " + this.orderEntityService.getCurrentOrderEntity().zipcode);
    console.log("current order freq enum : " + this.orderEntityService.getCurrentOrderEntity().freqencyEnum);
    console.log("current number of jobs: " + this.orderEntityService.getCurrentOrderEntity().jobs);
  }



  options: any;

  overlays: any[];

  ngOnInit() {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };
  }

}
