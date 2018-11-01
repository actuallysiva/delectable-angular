import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RestaurantService } from '../restaurant.service';
import { CityService } from '../city.service';
import { Restaurant } from '../models/restaurant';
import { MapComponent } from './map.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [
    RestaurantService,
    CityService
  ]
})
export class DetailComponent implements OnInit {

  restaurant: Restaurant;
  reviews: '';

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private cityService: CityService,
  ) { }

  ngOnInit() {
    this.route.params
              .switchMap((param: Params) => this.restaurantService.getRestaurantDetail(param.id))
              .subscribe((response: Restaurant) => {
                console.log(response);
                this.restaurant = response;
                this.restaurantService.getRestaurantReview(response.id).subscribe((reviews) => {
                  // console.log(reviews);
                  this.reviews = reviews.user_reviews;
                  console.log(this.reviews);
                });
              });
  }

}
