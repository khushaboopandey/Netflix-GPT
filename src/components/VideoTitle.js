import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] p-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='p-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-60 rounded  hover:bg-opacity-50 '>
          ▶️ play
        </button>
        <button className='bg-gray-500 mx-2 text-white p-4  px-12 text-xl bg-opacity-60 rounded  '>
          more Info
        </button>

      </div>
    </div>
  )
}

export default VideoTitle