import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from '../../product/state/models';
import { Observable } from 'rxjs/Observable';
import { RemoveItemAction } from '../../product/state/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems$: Observable<Item[]>;

  items: Item[] = [];
  
  constructor(private store: Store<any>) {
      this.cartItems$ = this.store.select("cartItems");
   }

  ngOnInit() {
    this.cartItems$
    .subscribe ( (items: Item[]) => {
        this.items = items;
    });
  }

  removeItem(id: any) {
    this.store.dispatch(new RemoveItemAction({id: id}));
  }

}
