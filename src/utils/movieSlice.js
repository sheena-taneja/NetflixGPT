import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovie : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        removeMovie: (state, action) => {
            return null;
        }
    }
})

export const {addNowPlayingMovie, removeMovie} = movieSlice.actions;

export default movieSlice.reducer;