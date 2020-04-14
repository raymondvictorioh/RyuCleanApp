import { OrderEntity } from './order-entity';
import { CreditCard } from './credit-card';

export class Customer {

    cusId: number;
    firstName: string;
    lastName: string;
    username: string;
    contactNum: number;
    password: string;
    orders: OrderEntity[];
    creditCards: CreditCard[];

    constructor(cusId?: number,firstName?:string, lastName?: string, username?: string, contactNum?: number, password?: string){
        this.cusId = cusId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.contactNum = contactNum;
        this.password = password;
        this.orders = new Array(); 
        this.creditCards = new Array();
    }
}
