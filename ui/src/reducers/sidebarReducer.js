import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const actionCreator = createAction('SOME_ACTION_TYPE', (text, id) => {
    return {
        payload: {
            text,
            id,
        }
    }
})

const initialState = {
    isOpen: false
}

const sidebarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actionCreator, (state, action) => {
            console.log(action.payload)
            return initialState;
        })

        .addDefaultCase((state, action) => {
            console.log("test")
            return initialState
        })
})

export {sidebarReducer, actionCreator};