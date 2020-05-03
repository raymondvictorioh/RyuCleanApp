import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../job.service';
import { Job } from '../../job';
import { LoadingController, ModalController } from '@ionic/angular';
import { ViewJobDetailsPage } from '../view-job-details/view-job-details.page';
import { DatePipe } from '@angular/common';
import { DateSettingModalPage } from "../date-setting-modal/date-setting-modal.page";

// import { JobStatusEnum } from '../../job-status-enum.enum';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.page.html',
  styleUrls: ['./pending-order.page.scss'],
})
export class PendingOrderPage implements OnInit {

  jobs: Job[];
  jobId: number;
  message: string;
  numberOfJobs: number;
  constructor(private datepipe: DatePipe, private router: Router, private jobService: JobService, public loadingController: LoadingController, public modalController: ModalController, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.refreshJobs();
  }


  ionViewWillEnter() {
    this.refreshJobs();
    console.log("asdasd");
  }

  refreshJobs() {
    this.jobService.getPendingJobs().subscribe(
      response => {
        this.jobs = response.jobs;
        console.log(this.jobs.length);
        this.numberOfJobs = this.jobs.length;
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
  }


  async presentAlert(event, job) {
    console.log('********************* ' + job.jobId);
    this.jobId = job.jobId;
    this.jobService.setCurrentJob(job);
    console.log(job.jobId);
    const modal = await this.modalController.create({
      component: DateSettingModalPage,
      componentProps: {
        jobId: this.jobId
      }
    });
    modal.present();

  }

  parseDate(d: Date) {
    return d.toString().replace('[UTC]', '');
  }


}
