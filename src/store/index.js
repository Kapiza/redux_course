// import { legacy_createStore as createStore, combineReducers} from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import {cashReducer} from "./cashReducer"
import { customerReducer } from './customerReducer'
// import com

export const store = configureStore({
    reducer: {
        cash: cashReducer,
        customers: customerReducer,
    }

})


