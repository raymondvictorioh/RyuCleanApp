import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../job.service';
import { Job } from '../../job';
import { LoadingController, ModalController } from '@ionic/angular';
import { ViewJobDetailsPage } from '../view-job-details/view-job-details.page';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { BarcodeModalPageModule } from '../barcode-modal/barcode-modal.module';
import { BarcodeModalPage } from '../barcode-modal/barcode-modal.page';

@Component({
  selector: 'app-scheduled-order',
  templateUrl: './scheduled-order.page.html',
  styleUrls: ['./scheduled-order.page.scss'],
})
export class ScheduledOrderPage implements OnInit {

  jobs: Job[];
  value: number;


  constructor(private datepipe: DatePipe,
    private router: Router,
    private jobService: JobService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public alertController: AlertController,
    public barcodeModalModule: BarcodeModalPageModule) { }

  ngOnInit() {
    this.refreshJobs();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingController.create({
  //     spinner: null,
  //     duration: 5000,
  //     message: 'Click the backdrop to dismiss early...',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading',
  //     backdropDismiss: true
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed with role:', role);
  // }

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
    this.jobService.getAcceptedJobs().subscribe(
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

  /*async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an Alert Message',
      buttons: ['OK','No']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }*/

  async presentAlert(event, job) {
    let currentJobId: number = job.jobId;
    const modal = await this.modalController.create({
      component: BarcodeModalPage,
      componentProps: {
        jobId: currentJobId
      }
    });
    modal.present();

  }








}
