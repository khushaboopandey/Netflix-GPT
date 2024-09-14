import React from 'react'
import { useEffect } from 'react';
import { API_OPTIONS } from "../utils/constant"

const VideoBackgrpond = ({ moviesId }) => {
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos`, API_OPTIONS);
    const json = await data.json();

    const filterdData = json.results.filter(data => data.type === "Trailer")
    const trailar = filterdData[0]
  }

  useEffect(() => {
    getMovieVideos()
  }, [])
  return (
    <div>VideoBackgrpond</div>
  )
}

export default VideoBackgrpond