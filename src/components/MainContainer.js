import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackgrpond'
const MainContainer = () => {
  const movies = useSelector(store => store.movies?.addNowPlayingMovies
  );
  if (!movies) return; // here !movies means movies === null

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground moviesId={id} />
    </>
  )
}

export default MainContainer