import { Plan } from './plan';
import { Job } from './job';
import { FrequencyEnum } from './frequency-enum.enum';
import { GenderEnum } from './gender-enum.enum';

export class OrderEntity {

    orderId: number;
    plan: Plan;
    orderDate: Date;
    jobs: Job[];
    freqencyEnum: FrequencyEnum;
    zipcode: string;
    genderPreference: string;
    notes: string;

    constructor(orderId?: number, plan?: Plan, orderDate?: Date, jobs?: Job[], freqencyEnum?: FrequencyEnum, zipcode?: string,
        genderPreference?: string, notes?: string){
        this.orderId = orderId;
        this.plan = plan;
        this.orderDate = this.orderDate;
        this.jobs = jobs;
        this.freqencyEnum = this.freqencyEnum;
        this.zipcode = this.zipcode;
        this.genderPreference = genderPreference;
        this.notes = notes;
        
    }

}
