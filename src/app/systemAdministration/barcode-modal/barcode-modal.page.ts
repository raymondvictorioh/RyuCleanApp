import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NavParams, ModalController } from '@ionic/angular'; 
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-barcode-modal',
  templateUrl: './barcode-modal.page.html',
  styleUrls: ['./barcode-modal.page.scss'],
})
export class BarcodeModalPage implements OnInit {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  passedId = null;
  feedback: String = null;
  feedbackRating: number; 


  constructor(private navParams: NavParams,
              public alertController: AlertController,
              private barcodeScanner: BarcodeScanner,
              private router: Router,
              private modalController: ModalController){ }

  ngOnInit() {
    this.passedId = this.navParams.get("jobId");
    this.passedId.toString();
    //console.log(this.passedId)
    this.qrData = this.passedId.toString();
    //this.createCode();
    
  }

  createCode(rating: number, feedbackString: String){
    this.qrData = this.qrData + " " + rating.toString() + " " + feedbackString;
    this.createdCode = this.qrData;
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Feedback',
      subHeader: 'Comments',
      inputs: [
        {
          name: 'feedback',
          placeholder: 'Feedback'
        }],
      message: 'Please leave a rating',
      cssClass: 'alertstar',
      backdropDismiss: false,
      buttons: [
            { text: '1', handler: data => { this.resolveRec(1, data.feedback);}},
            { text: '2', handler: data => { this.resolveRec(2, data.feedback);}},
            { text: '3', handler: data => { this.resolveRec(3, data.feedback);}},
            { text: '4', handler: data => { this.resolveRec(4, data.feedback);}},
            { text: '5', handler: data => { this.resolveRec(5, data.feedback);}}
               ]
    

    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

   closeModal(){
     this.modalController.dismiss();
     console.log(this.resolveRec);
     
   }

   resolveRec(rating: number, feedbackString : string){
    this.feedbackRating = rating;
    this.feedback = feedbackString;
    //console.log(this.feedbackRating);
    this.createCode(rating, feedbackString);
    console.log(this.feedback);
   }

   
}
