import { Component, OnInit, Input } from '@angular/core';
import { RestaurantLocation } from '../models/restaurant_location';

declare const google: any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'map',
    template: `
        <div id="map"></div>
    `,
    styleUrls: [
        './map.component.css'
    ]
})
export class MapComponent implements OnInit {

    @Input() restaurantLocation: RestaurantLocation;

    ngOnInit() {
        console.log(this.restaurantLocation);
        const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: Number(this.restaurantLocation.latitude) , lng: Number(this.restaurantLocation.longitude)}
        });

         const marker = new google.maps.Marker({
          position: {lat: Number(this.restaurantLocation.latitude) , lng: Number(this.restaurantLocation.longitude)},
          map: map
        });
        directionsDisplay.setMap(map);
    }

// tslint:disable-next-line:eofline
}