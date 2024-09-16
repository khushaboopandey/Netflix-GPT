import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ moviesId }) => {
  const trailerVideo = useSelector((store => store?.movies.addTrailerVideo));
  useMovieTrailer(moviesId);

  return (
    <div className='relative w-screen h-screen'>
      <iframe
        className='w-full h-full object-cover'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&cc_load_policy=0&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
