import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { OrderEntity } from './order-entity';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class OrderEntityService {

  baseUrl: String;

  

  constructor (private httpClient: HttpClient,
              private utilityService: UtilityService) { 
                this.baseUrl = this.utilityService.getRootPath() + "OrderEntity"; 
              }

  
  getCurrentOrderEntity(): OrderEntity
  {
    return this.utilityService.getCurrentOrder();
  }

  setCurrentOrderEntity(orderEntityToBeSet: OrderEntity): void
  {
    this.utilityService.setCurrentOrderEntity(orderEntityToBeSet);
  }
  
  
}
