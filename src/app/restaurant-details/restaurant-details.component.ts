import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {Restaurant} from '../restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {

    restaurant: Restaurant;

    constructor(private restaurantsService: RestaurantsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.restaurantsService.getRestaurantById(this.route.snapshot.params['id'])
            .subscribe(restaurant => this.restaurant = restaurant);
    }

}
