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

  baseUrl: String;

  constructor(private httpClient: HttpClient,
    private utilityService: UtilityService) {
    this.baseUrl = this.utilityService.getRootPath() + "Customer";
  }

  customerLogin(username: string, password: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/customerLogin?username=" + username + "&password" + password).pipe
      (
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
