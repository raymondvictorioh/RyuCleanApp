export class OrderEntity {

    genderPreference: string;
    notes: string;

    constructor(genderPreference?: string, notes?: string){
        this.genderPreference = genderPreference;
        this.notes = notes;
    }

}
