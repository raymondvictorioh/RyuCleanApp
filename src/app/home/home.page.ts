import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public utilityService:UtilityService) { }

  ngOnInit() {
    console.log('********** HomePage.ngOnInit()');		
  }

}
