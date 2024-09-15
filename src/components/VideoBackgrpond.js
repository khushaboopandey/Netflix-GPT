import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from "../utils/constant"
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackgrpond = ({ moviesId }) => {
  const dispatch = useDispatch()
  const trailerVideo = useSelector((store => store?.movies.addTrailerVideo));

  // fetch trailer video and update the store
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos`, API_OPTIONS);
    const json = await data.json();

    const filterdData = json.results.filter(data => data.type === "Trailer")
    const trailar = filterdData.length ? filterdData[0] : json.results[0];
    dispatch(addTrailerVideo(trailar))
  }

  useEffect(() => {
    getMovieVideos()
  }, [])

  return (
    <div> <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo?.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  )
}

export default VideoBackgrpond