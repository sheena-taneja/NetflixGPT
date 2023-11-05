import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({details}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(details);
  return (
    <div className='w-screen'>
      <iframe
      className='w-screen aspect-[15/8]'
      src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1"}
      title="youtube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground
