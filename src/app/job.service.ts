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

  getCompletedJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsByJobStatusEnumForCustomers?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
      + "&cusId=" + this.utilityService.getCurrentCustomer().cusId + "&jobStatus=COMPLETED").pipe(
        catchError(this.handleError)
      );
  }

  getAcceptedJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsByJobStatusEnumForCustomers?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
      + "&cusId=" + this.utilityService.getCurrentCustomer().cusId + "&jobStatus=ACCEPTED").pipe(
        catchError(this.handleError)
      );
  }


  getPendingJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsByJobStatusEnumForCustomers?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
      + "&cusId=" + this.utilityService.getCurrentCustomer().cusId + "&jobStatus=PENDING").pipe(
        catchError(this.handleError)
      );
  }

  getInProgressJobs(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsByJobStatusEnumForCustomers?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
      + "&cusId=" + this.utilityService.getCurrentCustomer().cusId + "&jobStatus=CLEANING_IN_PROGRESS").pipe(
        catchError(this.handleError)
      );
  }




  // getPastJobs(): Observable<any> {
  //   return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsFromCustomerBeforeNow?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
  //     + "&cusId=" + this.utilityService.getCurrentCustomer().cusId).pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // getFutureJobs(): Observable<any> {
  //   return this.httpClient.get<any>(this.baseUrl + "/retrieveJobsFromCustomerAfterNow?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()
  //     + "&cusId=" + this.utilityService.getCurrentCustomer().cusId).pipe(
  //       catchError(this.handleError)
  //     );
  // }

  getOrderFromJobId(jobId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveOrderByJobId/" + jobId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }

  getJobByJobId(jobId: number) {
    console.log(this.utilityService.getUsername());
    console.log(this.utilityService.getPassword());
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

  getCurrentJob(): Job {
    return this.utilityService.getCurrentJob();
  }

  setCurrentJob(job: Job): void {
    this.utilityService.setCurrentJob(job);
  }

  setCurrentJobList(jobList: Job[]): void {
    this.utilityService.setCurrentJobList(jobList);
  }

  getCurrentJobList(): Job[] {
    return this.utilityService.getCurrentJobList();
  }

  updateJob(jobToUpdate: Job): Observable<any>
  {
    let updateJobReq = {
      "username": this.utilityService.getUsername(),
      "password": this.utilityService.getPassword(),
      "job": jobToUpdate
    };

    return this.httpClient.post<any>(this.baseUrl, updateJobReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);

  }


}
