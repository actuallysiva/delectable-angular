import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../models/restaurant';

@Component({
    selector: 'collection-item',
    templateUrl: './collection_item.component.html'
})
export class CollectionItem implements OnInit {
    @Input() restaurant: Restaurant;

    constructor() {}

    ngOnInit() {

    }
}