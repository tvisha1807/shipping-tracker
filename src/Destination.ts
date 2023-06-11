import { faker }  from "@faker-js/faker"; 


export class Destination {
    receiver: string;
    location: {
        lat: number;
        lon: number;
    };


constructor() {
    this.receiver = faker.person.firstName();
    this.location = {
        lat: faker.location.latitude(),
        lon: faker.location.longitude(),
    }
}
}