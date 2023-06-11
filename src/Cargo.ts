import { faker }  from "@faker-js/faker"; 

export class Cargo {
    trackingid: string;
    location: {
        lat: number;
        lon: number;
    };

    constructor() {
        this.trackingid = faker.string.uuid()
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude(),
        }
    }
}