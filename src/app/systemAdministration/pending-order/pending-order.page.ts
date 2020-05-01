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
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
  }


  async presentAlert(event, job) {
    console.log('********************* '+job.jobId);
    let currentJobId: number = job.jobId;
    const modal = await this.modalController.create({
      component: DateSettingModalPage,
      componentProps: {
        jobId: currentJobId
      }
    });
    modal.present();

  }

  parseDate(d: Date) {
    return d.toString().replace('[UTC]', '');
  }

  // viewJobDetails(event, job) {
  //   this.router.navigate(["/systemAdministration/viewJobDetails/"] + job.jobId)
  // }

    // presentLoadingDefault() {
  //   let loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });

  //   loading.present();

  //   setTimeout(() => {
  //     loading.dismiss();
  //   }, 5000);
  // }
}
