import React, { useEffect } from "react";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrandingMovies from "../hooks/useTrandingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

export const Browse = () => {
  useNowPlayingHooks();
  usePopularMovies()
  useTrandingMovies()
  useUpcomingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  );
};
