import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addTrailerVideo: null,
        addPopularMovies: null,
        addTrandingMovies: null,
        addUpcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload
        },
        addTrandingMovies: (state, action) => {
            state.addTrandingMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.addUpcomingMovies = action.payload
        }

    }

})

export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo, addTrandingMovies, addUpcomingMovies } = movieSlice.actions
export default movieSlice.reducer