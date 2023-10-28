import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false
    })
})

export default appStore;