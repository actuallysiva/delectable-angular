import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { apiKey } from './constant';

import { RestaurantResponse } from './models/restautrant_response';
import { Restaurant } from './models/restaurant';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  getRestaurant(collectionId: string): Observable<RestaurantResponse> {
    const headers = new Headers({ 'user-key' : apiKey });
    const requestOpt = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/search?collection_id=' + collectionId, requestOpt)
                .map((response: Response) => response.json());
  }

  getRestaurantDetail(resId: string): Observable<Restaurant> {
    const headers = new Headers({ 'user-key' : apiKey });
    const requestOpt = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + resId, requestOpt)
                .map((response: Response) => response.json());

  }

  getRestaurantReview(resId: string) {
    const headers = new Headers({ 'user-key' : apiKey });
    const requestOpt = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/reviews?res_id=' + resId, requestOpt)
                .map((response: Response) => response.json());

  }

}
