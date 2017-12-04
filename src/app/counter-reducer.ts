
import * as ActionTypes from "./action-types";

// action: {type : 'INCREMENT'}
// pure function
// stateless
// immutable
export function counterReducer(state = 0, 
                               action:any) {

    console.log("counter reudcer ", state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + 1;

        case ActionTypes.DECREMENT: 
            return state - 1;

        default:
            return state;
    }

}