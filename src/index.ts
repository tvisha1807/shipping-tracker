//  const createDiv = function() {
//      const div = document.createElement('div');
//     const statement = document.createTextNode('Cargo Tracking App');
//     div.append(statement);

//     document.body.appendChild(div);
// };

// createDiv();

import { Destination } from "./Destination" ;
import {Cargo} from "./Cargo";



const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

// new google.maps.Map(document.getElementById('g-map'), {
//     zoom:1.6,
//     center: {
//         lat: 0,
//         lng: 20,
//     },
// });

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();



git remote add origin https://github.com/tvisha1807/shipping-tracker.git