import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Job } from './job';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  baseUrl: string;

  constructor(private httpClient: HttpClient,
    private utilityService: UtilityService) {
    this.baseUrl = this.utilityService.getRootPath() + "Job";
  }

  getJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveAllJobs?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }

  getOrderFromJobId(jobId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveOrderByJobId/" + jobId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }

  getJobByJobId(jobId: number) {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJob/" + jobId + "?username=" + this.utilityService.getUsername() + "$password=" + this.utilityService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error.message;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }


}
