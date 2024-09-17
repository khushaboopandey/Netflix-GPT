import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrandingMovies from "../hooks/useTrandingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

export const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingHooks();
  usePopularMovies()
  useTrandingMovies()
  useUpcomingMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? <GPTSearch /> : <> <MainContainer />
        <SecondryContainer /></>}
    </div>
  );
};
