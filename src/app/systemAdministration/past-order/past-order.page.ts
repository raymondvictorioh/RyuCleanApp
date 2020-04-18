import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../job.service';
import { Job } from '../../job';
import { LoadingController, ModalController } from '@ionic/angular';
import { ViewJobDetailsPage } from '../view-job-details/view-job-details.page';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.page.html',
  styleUrls: ['./past-order.page.scss'],
})
export class PastOrderPage implements OnInit {
  jobs: Job[];


  constructor(private datepipe: DatePipe, private router: Router, private jobService: JobService, public loadingController: LoadingController, public modalController: ModalController) { }

  ngOnInit() {
    this.refreshJobs();
  }


  async presentModal() {
    console.log("asdsasd");
    const modal = await this.modalController.create({
      component: ViewJobDetailsPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.refreshJobs();
    console.log("asdasd");
  }

  refreshJobs() {
    this.jobService.getPastJobs().subscribe(
      response => {
        this.jobs = response.jobs;
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )
  }

  viewJobDetails(event, job) {
    this.router.navigate(["/systemAdministration/viewJobDetails/"] + job.jobId)
  }

  parseDate(d: Date) {
    return d.toString().replace('[UTC]', '');
  }




}
