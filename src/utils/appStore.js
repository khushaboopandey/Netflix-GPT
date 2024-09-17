import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import gptReducer from "./gptSlice";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
