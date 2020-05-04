import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NavParams, ModalController } from "@ionic/angular";
import { Job } from 'src/app/job';
import { JobService } from 'src/app/job.service';
import { NgForm } from '@angular/forms';
import { JobStatusEnum } from 'src/app/job-status-enum.enum';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-date-setting-modal',
  templateUrl: './date-setting-modal.page.html',
  styleUrls: ['./date-setting-modal.page.scss'],
})
export class DateSettingModalPage implements OnInit {

  jobId: number;
  newJob: Job;
  submitted: boolean;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  time: Date;

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private router: Router,
    private jobService: JobService,
    private datepipe: DatePipe,
    private toastController: ToastController) {
    this.jobId = Number(this.navParams.get("jobId"));
    console.log(this.jobId);

    this.newJob = jobService.getCurrentJob();
    console.log("******************" + this.newJob.jobStatusEnum);
    console.log("***************" + this.newJob.jobDate);

  }

  ngOnInit() {
  }

  submit(submitForm: NgForm) {

    console.log("******************" + this.newJob.jobStatusEnum);
    //this.newJob.jobDate = (this.newJob.jobDate).toDateString();
    //myDate.setMinutes(myDate.getMinutes() - myDate.getTimezoneOffset());
    console.log("***************" + this.newJob.jobDate);
    console.log("***************" + this.newJob.jobTime);


    this.newJob.jobStatusEnum = JobStatusEnum.ASSIGNED;

    if (submitForm.valid) {

      this.jobService.updateJob(this.newJob).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Job successfully set";
          console.log("Job successfully set");
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating the product: " + error;

          console.log('********** UpdateProductComponent.ts: ' + error);
        }

      );
    }
    this.closeModal();

  }

  closeModal() {
    this.modalController.dismiss();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your job has been successfully assigned!',
      duration: 2000
    });
    toast.present();
  }


}
