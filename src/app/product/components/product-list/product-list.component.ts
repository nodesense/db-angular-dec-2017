import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';

import {Response} from "@angular/http";
import { Store } from '@ngrx/store';
 import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Item } from '../../state/models';
 
import * as ActionTypes from "../../state/action-types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: any[] = [];
  subscription: Subscription;

  

  constructor(private productService: ProductService,
              private store: Store<any>
  ) { 
  }

  ngOnInit() {
    
    this.subscription = this.productService.getProducts()
    .subscribe ( (response: Response) => {
       
      console.log(response);
       this.products = response.json();
    });
 

    this.store.dispatch({type: 'FETCH_PRODUCTS'});

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addItemToCart(product : any) {
     
    let item: Item = {
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    };
 
    let action = {
      type: ActionTypes.ADD_ITEM,
      payload: {
        item: item
      }
    };

    this.store.dispatch(action);
  }




  

}
