import { useDispatch } from "react-redux";
import { API_CONST } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (details) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${details.id}/videos?language=en-US`, API_CONST);
        const json = await data.json();
        const filteredData = json.results.filter(video => video.type.toLowerCase().includes("trailer"));
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getMovieVideos();
      },[])


}

export default useMovieTrailer;