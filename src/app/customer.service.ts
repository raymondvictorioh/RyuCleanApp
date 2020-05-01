import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string;

  constructor(private httpClient: HttpClient,
    private utilityService: UtilityService) {
    this.baseUrl = this.utilityService.getRootPath() + "Customer";
  }

  customerLogin(username: string, password: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/customerLogin?username=" + username + "&password=" + password).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewCustomer(newCustomer: Customer): Observable<any> {
    console.log("Easdasd");
    let createNewCustomerReq = { "newCustomer": newCustomer }
    return this.httpClient.put<any>(this.baseUrl, createNewCustomerReq, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveCustomerByCustomerId(cusId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveCustomer/" + cusId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }

  updateCustomer(): Observable<any> {
    let updateCustomerReq = {
      "username": this.utilityService.getCurrentCustomer().username,
      "password": this.utilityService.getPassword(),
      "customer": this.utilityService.getCurrentCustomer()

    };
    return this.httpClient.post<any>(this.baseUrl, updateCustomerReq, httpOptions).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occured : " + error.error.message;
    } else {
      errorMessage = "A HTTP error has occured : " + `HTTP ${error.status}: ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }






}
