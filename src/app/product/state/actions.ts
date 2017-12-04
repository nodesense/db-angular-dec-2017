import { Action } from '@ngrx/store';
import * as ActionTypes from "./action-types";
import { Item } from './models';
 

//=> {type: 'ADD_ITEM', payload: {item: { id: 1, ...} }

//=> action = new AddItemAction({id: 1, name: 'p1'})

export class AddItemAction implements Action {
  readonly type = ActionTypes.ADD_ITEM;

  constructor(public payload: { item: Item }) {}
}


export class RemoveItemAction implements Action {
    readonly type = ActionTypes.REMOVE_ITEM;
  
    constructor(public payload: { id: number }) {}
}
 

export class EmptyCartAction implements Action {
    readonly type = ActionTypes.EMPTY_CART;
  
    constructor() {}
}
 
