import React, { useEffect } from "react";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

export const Browse = () => {
  useNowPlayingHooks();
  usePopularMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  );
};
