import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='p-36 p-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='p-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-60 rounded  '>
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