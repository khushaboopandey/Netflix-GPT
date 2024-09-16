import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondryContainer = () => {
  const movie = useSelector(store => store?.movies);

  console.log('====================================');
  console.log(movie);
  console.log('====================================');
  return (
    movie && (
      <div className="bg-black min-h-screen">
        <div className="relative -mt-60 z-20 pt-48 p-6">
          <MovieList title={"Now Playing"} movies={movie.addNowPlayingMovies} />
          <MovieList title={"Trending Movies"} movies={movie.addNowPlayingMovies} />
          <MovieList title={"Popular"} movies={movie.addPopularMovies} />
          <MovieList title={"UpCpmming"} movies={movie.addNowPlayingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondryContainer;
