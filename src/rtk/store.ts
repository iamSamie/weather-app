import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search/searchSlice";

export const rootReducer = combineReducers({
    search: searchSlice
})

export const store = configureStore({
    reducer: rootReducer
})