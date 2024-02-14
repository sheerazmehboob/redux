// Reducer is a function that accepts a state and an action as a parameter and returns the new state
import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
        return {
            ...state,
            numberOfCakes : state.numberOfCakes - action.payload
        }
    
        default:
            return state;
    }
}

// to use this reducer in any file lets export it

export default cakeReducer;