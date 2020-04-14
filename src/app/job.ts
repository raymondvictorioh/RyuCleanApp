import { Cleaner } from './cleaner';
import { OrderEntity } from './order-entity';

export class Job {
    jobId: number;
    cleaner: Cleaner;
    order: OrderEntity;
    jobDate: Date;
    jobCompleted: boolean;

    constructor( jobId?: number, cleaner?: Cleaner, order?: OrderEntity,jobDate?: Date, jobCompleted?: boolean){
        this.jobId = jobId;
        this.cleaner = cleaner;
        this.order = order;
        this.jobDate = jobDate;
        this.jobCompleted = jobCompleted;
        
    }
}
