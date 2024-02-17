// Step-1
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes: 10,
}

// Step-2
const cakeSlice = createSlice({
    name: 'cake',
    // Step-3: I have created intialState with same key above
    initialState,
    // Step-4
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    }
})

// Step-5
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions