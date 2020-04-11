import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CleanerService {

  baseUrl: String;

  constructor( private httpClient: HttpClient,
              private utilityService: UtilityService) 
              { 
                this.baseUrl = this.utilityService.getRootPath() + "Cleaner"; 
              }
}
