import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Plan } from './plan';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
	providedIn: 'root'
})
export class PlanService {

	baseUrl: string;

	constructor(private httpClient: HttpClient,
		private utilityService: UtilityService) {
		this.baseUrl = this.utilityService.getRootPath() + "Plan";
	}


	getPlans(): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllPlans?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe(
			catchError(this.handleError)
		);
	}

	// getPlanByPlanId(planId: number): Observable<any> {
	// 	return this.httpClient.get<any>(this.baseUrl + "/retrievePlan/" + planId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe
	// 		(
	// 			catchError(this.handleError)
	// 		);
	// }
	getPlanByPlanId(planId: number): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl + "/retrievePlan/" + planId + "?username=" + this.utilityService.getUsername() + "&password=" + this.utilityService.getPassword()).pipe
			(
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


