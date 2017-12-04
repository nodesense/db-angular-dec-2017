import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, EMPTY_CART} from "./ActionTypes";
import { Action } from '@ngrx/store';

//state is items
const INITIAL_STATE = []

export interface ActionWithPayload<T> extends Action {
    payload: T;
  }
  
  export interface CartPayload {
    item?: any;
    id?: number;
    qty? : number
  }

//Reducer is a pure function
//No internal state
//Do NOT modify input parameters
//Immutable 
export function cartReducer(state=INITIAL_STATE,
                    action: ActionWithPayload<CartPayload>) {

   console.log("Cart reducer", state, action);

   switch (action.type) {
        case ADD_ITEM: {
           let item = state.find( item => item.id == action.payload.item.id);
           if (!item) { //item not found, add here
               return [...state, action.payload.item]
           }

           return state.map ( item => {
               if (item.id !== action.payload.item.id) {
                   return item;
               }

               return Object.assign({}, item, {qty: item.qty + action.payload.item.qty});
           })

        }

        case REMOVE_ITEM: {
           return state.filter(item => item.id != action.payload.id)
        }

        case UPDATE_ITEM: {
           return state.map ( item => {
               if (item.id != action.payload.id) {
                   return item;
               }

               return Object.assign({}, item, {qty: action.payload.qty});
           })
        }

        case EMPTY_CART : {
           return []
        }

        default:
           return state;
   }

}