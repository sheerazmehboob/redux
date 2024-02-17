const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const iceccreamReducer = require('../features/icecream/icecreamSlice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceccreamReducer,
    }
})

module.exports = store