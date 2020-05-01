import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NavParams, ModalController } from "@ionic/angular";
import { Job } from 'src/app/job';
import { JobService } from 'src/app/job.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-date-setting-modal',
  templateUrl: './date-setting-modal.page.html',
  styleUrls: ['./date-setting-modal.page.scss'],
})
export class DateSettingModalPage implements OnInit {

  jobId : number;
  newJob: Job;
  submitted: boolean;

  resultSuccess: boolean;
	resultError: boolean;
	message: string;

  constructor(private navParams: NavParams,
  private modalController: ModalController,
  private router: Router,
  private jobService: JobService) { 
  }

  ngOnInit() {
    this.jobId = this.navParams.get("jobId");
    
    console.log('hi********************' + this.jobId);
    this.jobService.getJobByJobId(this.jobId).subscribe(
      response => {
        this.newJob = response.jobEntity;
      },
      error => {
        console.log('***************** DateSettingModalPage' + error);
      }
    )
  }

  submit(submitForm : NgForm){

    console.log(this.newJob.jobId + ' ' + this.newJob.jobDate)
    
    if (submitForm.valid){

      this.jobService.updateJob(this.newJob).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Job successfully set";
        },
        error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while updating the product: " + error;
					
					console.log('********** UpdateProductComponent.ts: ' + error);
				}

      );
    }

  }

  closeModal(){
    this.modalController.dismiss();
  }


}
