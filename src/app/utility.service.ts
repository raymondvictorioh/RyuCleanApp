import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Customer } from './customer';
import { OrderEntity } from './order-entity';
import { Job } from './job';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {

	constructor(private platform: Platform) {
	}

	getRootPath(): string {
		console.log('this.platform.is("hybrid"): ' + this.platform.is('hybrid'));

		if (this.platform.is('hybrid')) {
			return "http://192.168.137.1:8080/RyuCleanRws/webresources/";
		}
		else {
			return "/api/";
		}


	}

	getIsLogin(): boolean {
		if (sessionStorage.isLogin == "true") {
			return true;
		}
		else {
			return false;
		}
	}

	setIsLogin(isLogin: boolean): void {
		sessionStorage.isLogin = isLogin;
	}

	getCurrentCustomer(): Customer {
		return JSON.parse(sessionStorage.currentCustomer);
	}

	setCurrentCustomer(currentCustomer: Customer): void {
		sessionStorage.currentCustomer = JSON.stringify(currentCustomer);
	}

	getUsername(): string {
		return sessionStorage.username;
	}

	setUsername(username: string): void {
		sessionStorage.username = username;
	}

	setCurrentCustomerId(cusId: number): void {
		sessionStorage.cusId = cusId;
	}

	getCurrentCustomerId(): number {
		return sessionStorage.cusId;
	}

	getPassword(): string {
		return sessionStorage.password;
	}

	setPassword(password: string): void {
		sessionStorage.password = password;
	}


	getCurrentOrder(): OrderEntity {
		return JSON.parse(sessionStorage.currentOrderEntity);
	}


	setCurrentOrderEntity(currentOrderEntity: OrderEntity): void {
		sessionStorage.currentOrderEntity = JSON.stringify(currentOrderEntity);
	}

	// getCurrentPlanIdInNewOrder():number{
	// 	return JSON.parse()
	// }

	getCurrentJob(): Job {
		return JSON.parse(sessionStorage.currentJob);
	}

	setCurrentJob(currentJob: Job): void {
		sessionStorage.currentJob = JSON.stringify(currentJob);
	}

	setCurrentJobList(jobList: Job[]) {
		sessionStorage.currentJobList = JSON.stringify(jobList);
	}

	getCurrentJobList(): Job[] {
		return JSON.parse(sessionStorage.currentJobList);
	}



}
