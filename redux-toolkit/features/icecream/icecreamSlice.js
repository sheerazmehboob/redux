const createSlice = require('@reduxjs/toolkit').createSlice

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
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions