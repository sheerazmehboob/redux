const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Sherry",
  address: {
    street: "Main Street",
    city: "Bahawalpur",
    state: "Punjab",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

// Notice we are struggling here to keep rest of the values unchanged and this is just a smnall example.
/*
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default: {
      return state;
    }
  }
};
*/

// The alternate method is "immer" package that maintains the current values for us and we just have to update the new value
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
        // Instaed of returning state now we will return produce function. state is current state while draft is a function that recieves draft copy of state
        // Now immer will translate this into code like one we have above
        return produce(state, (draft) => {
            draft.address.street = action.payload;
        })
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(updateStreet("Update Main Street"));
unsubscribe();
