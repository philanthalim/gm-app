import {createReducer} from "@reduxjs/toolkit";
import {SET_USERNAME} from "../actions/user";

export const userReducer = createReducer(
    {
       username: "",
       isAuthenticated: false
    }
    ,
    builder => {
        builder.addCase(SET_USERNAME, (state, action) => {
            state.username = action.payload;
            state.isAuthenticated = true
        })
    })
