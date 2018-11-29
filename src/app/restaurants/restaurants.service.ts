import {Restaurant} from './restaurant/restaurant.model';

import {MEAT_API} from '../app.api';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {MenuItem} from '../restaurant-details/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) {}

    getRestaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined;

        if (search) {
            params = new HttpParams().append('q', search);
        }

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
            // .map(response => response.json())
            // .catch(ErrorHandler.handleError);

            /* usando HTTP CLIENT
                this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)

                acessando mais informacoes da resposta
                this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {observe: 'response'})
            */

    }

    getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
            // .map(response => response.json())
            // .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
            // .map(response => response.json())
            // .catch(ErrorHandler.handleError);
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
            // .map(response => response.json())
            // .catch(ErrorHandler.handleError);
    }


}
