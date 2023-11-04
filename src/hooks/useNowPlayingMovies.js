import { useDispatch } from "react-redux";
import { API_CONST } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {


    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_CONST);
  
      const json = await data.json();
      dispatch(addNowPlayingMovie(json.results))
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[]);

}

export default useNowPlayingMovies;