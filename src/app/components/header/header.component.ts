import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import { EMPTY_CART } from '../../product/state/action-types';
import { EmptyCartAction } from '../../product/state/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems$: Observable<any>;

  cartCount: number;
  amount: number;

  constructor(private store: Store<any>) {

    this.cartItems$ = store.select("cartItems");

   }

  ngOnInit() {
    this.cartItems$
    .map( (items) => items.length)
    .subscribe( (total: number) => {
      this.cartCount = total;
      console.log(" in header ", total);
      
    });


    this.cartItems$
    .map( (items) => {
      let amount = 0;
      for (let item of items) {
        amount += item.qty * item.price;
      };

      return amount;
    })
    .subscribe( (amount: number) => {
      this.amount = amount;
      console.log(" in header ", amount);
    });
  }

  emptyCart() {
    this.store.dispatch(new EmptyCartAction());
  }

}
