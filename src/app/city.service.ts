import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { apiKey } from './constant';

import { LocationResponse } from './models/location_response';

@Injectable()
export class CityService {

  constructor(private http: Http) {
  }

  getLocations(keyword: string): Observable<LocationResponse> {
    const headers = new Headers({ 'user-key' : apiKey });
    const requestOpt = new RequestOptions({ headers: headers });

    return this.http.get('https://developers.zomato.com/api/v2.1/locations?query=' + keyword + '&count=10', requestOpt)
            .map((response: Response) => response.json());
  }

  getLocationDetails(locationId: string, locationType: string) {
    const headers = new Headers({ 'user-key' : apiKey });
    const requestOpt = new RequestOptions({ headers: headers });

    // tslint:disable-next-line:max-line-length
    return this.http.get('https://developers.zomato.com/api/v2.1/location_details?entity_id=' + locationId + '&entity_type=' + locationType, requestOpt)
            .map((response: Response) => response.json());
  }
}
