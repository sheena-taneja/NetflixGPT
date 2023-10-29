import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : movieSlice,
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false
    })
})

export default appStore;