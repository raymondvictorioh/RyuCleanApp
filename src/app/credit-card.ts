import { Customer } from './customer';

export class CreditCard {

    creditCardId: number;
    creditCardName: string;
    creditCardNumber: string;
    cvc: number;
    expirationDate: Date;
    customer: Customer;

    constructor(creditCardNumber?: string, cvc?: number, expirationDate?: Date, customer?: Customer ){
        this.creditCardNumber = creditCardNumber;
        this.cvc = cvc;
        this.expirationDate = expirationDate;
        this.customer = customer;

    }
}
