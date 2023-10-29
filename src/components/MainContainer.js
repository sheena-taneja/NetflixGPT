import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

function MainContainer() {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
 if(!movies) return;  
  console.log({movies})
  const mainMovie = movies[0];
  return (
    <div>
        main
      <VideoTitle details={mainMovie}/>
      <VideoBackground details={mainMovie} />
    </div>
  )
}

export default MainContainer;
