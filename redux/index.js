const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const RESTOCK_CAKE = 'RESTOCK_CAKE';
const RESTOCK_ICECREAM = 'RESTOCK_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Buy Cake Action'
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Buy Ice Cream Action'
    };
}

function restockCake(quantity) {
    return {
        type: RESTOCK_CAKE,
        quantity,
        info: 'Restock Cake Action'
    };
}

function restockIceCream(quantity) {
    return {
        type: RESTOCK_ICECREAM,
        quantity,
        info: 'Restock Ice Cream Action'
    };
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        case RESTOCK_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity
            };
        case RESTOCK_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.quantity
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// Restocking cakes and ice creams
store.dispatch(restockCake(5));
store.dispatch(restockIceCream(10));

unsubscribe();
