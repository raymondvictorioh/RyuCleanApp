import { Customer } from './customer';

export class CreditCard {

    creditCardNumber: string;
    cvc: number;
    expirationDate: string;
    customer: Customer;

    constructor(creditCardNumber?: string, cvc?: number, expirationDate?: string ){
        this.creditCardNumber = creditCardNumber;
        this.cvc = cvc;
        this.expirationDate = expirationDate;
        this.customer = new Customer();

    }
}
