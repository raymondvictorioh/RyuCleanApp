import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GMapModule} from 'primeng/gmap';

import { AlertController } from '@ionic/angular';

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

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,				
    public alertController: AlertController,
    public gmap: GMapModule) { 
    
     
    }

    options: any;

    overlays: any[];

    ngOnInit() {
        this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };
    }

}
