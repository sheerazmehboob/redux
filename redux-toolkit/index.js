const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {});

// Order Cake
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());

// Order IceCream
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());

// Restock IceCream
store.dispatch(icecreamActions.restocked(8));

// Restock Cake
store.dispatch(cakeActions.restocked(5));

unsubscribe();
