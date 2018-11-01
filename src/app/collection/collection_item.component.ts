import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../models/restaurant';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collection-item',
    templateUrl: './collection_item.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class CollectionItem implements OnInit {
    @Input() restaurant: Restaurant;

    constructor() {}

    ngOnInit() {

    }
// tslint:disable-next-line:eofline
}