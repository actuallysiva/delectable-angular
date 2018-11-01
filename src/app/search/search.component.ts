import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { LocationResponse } from '../models/location_response';
import { Location } from '../models/location';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    CityService
  ]
})
export class SearchComponent implements OnInit {

  terms$ = new Subject<string>();
  isSearchActive: boolean;
  searchText: string;
  locations: Location[];

  constructor(private cityService: CityService) {
    this.isSearchActive = false;
    this.searchText = '';
  }
  receiveClickStatus(event) {
    this.isSearchActive = event.status;
    this.searchText = event.city.title;
  }

  ngOnInit() {
    this.terms$
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(terms => this.cityService.getLocations(terms))
    .subscribe((response: LocationResponse) => {
      console.log(response);
      this.isSearchActive = true;
      this.locations = response.location_suggestions;
    });
  }
}
