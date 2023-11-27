// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {sidebarReducer } from "./reducers/sidebarReducer"

// Define your initial state
const initialState = {
  // Your initial state properties here
};

// Define your root reducer (you can combine multiple reducers using combineReducers)
const rootReducer = combineReducers(
  {
    sidebarReducer: sidebarReducer
  }
)

// Create the Redux store
const store = configureStore({reducer: rootReducer});

export default store;
