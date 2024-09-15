import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen h-full absolute inset-0 flex flex-col justify-center px-12 text-white bg-gradient-to-t from-black via-transparent to-black/60'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4'>{title}</h1>
      <p className='text-md md:text-lg lg:text-xl max-w-lg'>{overview}</p>
      <div className='mt-6'>
        <button className='bg-white text-black py-3 px-8 text-lg rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
          ▶️ Play
        </button>
        <button className='bg-gray-600 ml-4 text-white py-3 px-8 text-lg rounded hover:bg-gray-500 transition-all duration-300'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
