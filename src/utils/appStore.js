import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : movieSlice,
        gpt: gptSlice,
        config: configSlice
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false
    })
})

export default appStore;