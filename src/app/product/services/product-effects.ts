import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';


import {environment} from "../../../environments/environment";


@Injectable()
export class ProductEffects {
    constructor(
        private http: Http,
        private actions$: Actions
      ) {}
      
   @Effect() fetchProducts$: Observable<Action> = this.actions$.ofType('FETCH_PRODUCTS')
    .mergeMap(action =>
      this.http.get(environment.apiEndPoint + "/api/products")
        // If successful, dispatch success action with result
        .do ( (response) => {
            console.log("Effect got response ", response);
        })
        .map(response => ({ type: 'INIT_PRODUCTS', payload: {products: response.json()} }))
        .do ( (action) => {
            console.log("Effect action to dispatch ", action);
        })
        // If request fails, dispatch failed action
        .catch(() => of({ type: 'PRODUCT_FETCH_FAILED' }))
    );  
}