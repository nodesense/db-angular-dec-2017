
import * as ActionTypes from "./action-types";

// {type: 'ADD_ITEM', payload: { item: {id: 1, name: 'p1'..} }}

// {type: 'REMOVE_ITEM', payload: { id: 1 }}

export function cartReducer(state = [], action) {
switch(action.type) {
    case ActionTypes.ADD_ITEM: {
        //return [...state, action.payload.item]

        let item = state.find( item => item.id == action.payload.item.id);
        if (!item) { //item not found, add here
            return [...state, action.payload.item]
        }
    
        return state.map ( item => {
            if (item.id != action.payload.item.id) 
                return item;
    
            return Object.assign({}, item, {qty: item.qty + action.payload.item.qty});
        })
    };

    case ActionTypes.REMOVE_ITEM: {
        return state.filter( item => item.id != action.payload.id)
    }

    case ActionTypes.EMPTY_CART:
        return []
    
    default: 
        return state;

}
}

