import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../../job.service';
import { Job } from '../../job';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-job-details',
  templateUrl: './view-job-details.page.html',
  styleUrls: ['./view-job-details.page.scss'],
})

export class ViewJobDetailsPage implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  jobId: number;
  jobToView: Job;
  retrieveJobError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess;



  constructor(private router: Router, private jobService: JobService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private modalController: ModalController, private navParams: NavParams) {
    console.log(navParams.get('firstName'));
  }

  ngOnInit() {
    this.jobId = parseInt(this.activatedRoute.snapshot.paramMap.get('jobId'));

    this.refreshJob();
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  ionViewWillEnter() {
    this.refreshJob();
  }

  refreshJob() {
    this.jobService.getJobByJobId(this.jobId).subscribe(
      response => {
        this.jobToView = response.job;
      },
      error => {
        this.retrieveJobError = true;
        console.log('********* ViewJobDetailsPage.ts' + error);
      }
    )
  }

}
