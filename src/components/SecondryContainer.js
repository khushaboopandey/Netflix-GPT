import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movie = useSelector(store => store?.movies);

  return (
    movie && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movie.addNowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movie.addNowPlayingMovies} />
          <MovieList title={"Trending Movies"} movies={movie.addNowPlayingMovies} />
          <MovieList title={"Horror Movies"} movies={movie.addNowPlayingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondryContainer