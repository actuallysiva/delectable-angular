import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CityService } from '../city.service';
import { Location } from '../models/location';

@Component({
    selector: 'city',
    templateUrl : './city.component.html',
    providers: [
        CityService
    ]
})
export class CityComponent implements OnInit {
    @Input() city: Location;
    @Output() onClickEvent = new EventEmitter<object>();
    constructor() {}
    ngOnInit() {}
    onClickDetail(data: Location) {}
    click(event, city) {
        this.onClickEvent.emit({ status: false, city: city});
    }
}
