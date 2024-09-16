import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addTrailerVideo: null,
        addPopularMovies: null,
        addTrandingMovies: null,
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
        }

    }

})

export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo, addTrandingMovies } = movieSlice.actions
export default movieSlice.reducer