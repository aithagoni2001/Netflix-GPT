import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addBackgroundTrailer } from "../utils/moviesSlice";

const useBackgroundTrailer = ({ movieid }) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
  
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      // Check if `results` exists before filtering
      if (json.results && json.results.length > 0) {
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addBackgroundTrailer(trailer));
    
    }
  }

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useBackgroundTrailer;
