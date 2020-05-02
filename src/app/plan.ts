import { OrderEntity } from './order-entity';

export class Plan {

    planName: string;
    planDescription: string;
    dailyPrice: number;
    regularPrice: number;
    memberPrice: number;
    orderList: number[];
    image: string;

    constructor(planName?: string, planDescription?: string, dailyPrice?: number, regularPrice?: number, memberPrice?: number, image?: string) {
        this.planName = planName;
        this.planDescription = planDescription;
        this.dailyPrice = dailyPrice;
        this.regularPrice = regularPrice;
        this.memberPrice = memberPrice;
        this.orderList = new Array();
        this.image = image;
    }
}
