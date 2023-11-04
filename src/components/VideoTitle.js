import React from 'react'

const VideoTitle = ({details}) => {
    return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className='text-3xl font-bold'>{details.title}</h1>
      <p className='py-6 text-lg w-1/4'>{details.overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-80'> {"\u23F5"} Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
