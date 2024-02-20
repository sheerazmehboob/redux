// Step-1
import {createSlice} from '@reduxjs/toolkit'

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
    },
})

// Step-5
export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions