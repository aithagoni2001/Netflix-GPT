import React from 'react';
import MovieTitle from './MovieTitle';
import BackgroundTrailer from "./BackgroundTrailer";
import { useSelector } from 'react-redux';

export const MainMovieContainer = () => {
  const selectorMovies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Check if selectorMovies exists and has at least one item
  if (!selectorMovies || selectorMovies.length === 0) return null;

  const movie = selectorMovies[0];

  // Verify if movie is defined before destructuring
  if (!movie) return null;

  const { original_title, overview,id } = movie;

  return (
    <div>
      <MovieTitle title={original_title} overview={overview} />
      <BackgroundTrailer movieid = {id}/>
    </div>
  );
};

export default MainMovieContainer;
