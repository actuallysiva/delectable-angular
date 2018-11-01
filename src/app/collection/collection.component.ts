import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CityService } from '../city.service';
import { CollectionsResponse } from '../models/collection_response';
import { CollectionItem } from './collection_item.component';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [
    CityService
  ]
})
export class CollectionComponent implements OnInit {

  private collections;

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.cityService.getLocationDetails(params.id, params.type))
      .subscribe((data) => {
        console.log( data);
        this.collections = data.best_rated_restaurant;
        console.log(this.collections);
      });
  }

}
