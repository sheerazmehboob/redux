import {createSlice} from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numberOfIcecream : 10
}

const icecreamSlice = createSlice({
    name: 'iceccream',
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfIcecream--
        },
        restocked: (state, action) => {
            state.numberOfIcecream += action.payload
        }
    },
    // Extra Reducers
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numberOfIcecream--
        })
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions