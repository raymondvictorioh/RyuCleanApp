import { OrderEntity } from './order-entity';

export class Customer {

    customerId: number;
    firstName: string;
    lastName: string;
    username: string;
    contactNum: number;
    password: string;
    orderList: OrderEntity[];

    constructor(customerId?: number,firstName?:string, lastName?: string, username?: string, contactNum?: number, password?: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.contactNum = contactNum;
        this.password = password;
        this.orderList = new Array(); 
    }
}
