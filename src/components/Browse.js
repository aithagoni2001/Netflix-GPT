
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import React from "react";

import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { MainMovieContainer } from "./MainMovieContainer";

const Browse = () => {

  useNowPlayingMovies();
 
  return (
    <div >
      <Header/>
      <MainMovieContainer/>
      <SecondaryMovieContainer/>
    </div>
  );
};

export default Browse;
