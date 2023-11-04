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
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovie, removeMovie, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;