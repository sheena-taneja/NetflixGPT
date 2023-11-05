import React from 'react'

const VideoTitle = ({details}) => {
    return (
    <div className="w-screen aspect-[15/8] pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className='text-3xl font-bold'>{details.title}</h1>
      <p className='py-6 text-s w-1/4'>{details.overview}</p>
      <div>
        <button className='bg-white text-black p-2 px-8 text-xl rounded-lg hover:opacity-80'> {"\u23F5"} Play</button>
        <button className='mx-2 bg-gray-500 text-white p-2 px-8 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
