import React, { useEffect } from "react";
import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

export const Browse = () => {
  useNowPlayingHooks();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  );
};
