import { configureStore } from "@reduxjs/toolkit";
import gptReducer from "./gptSlice";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,

  },
});

export default appStore;
