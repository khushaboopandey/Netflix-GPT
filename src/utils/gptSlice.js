import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieSearch: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        getMovieSearch: (state, actions) => {
            state.movieSearch = actions.payload;
        }

    }
});

export const { toggleGptSearchView, getMovieSearch } = gptSlice.actions;
export default gptSlice.reducer;
