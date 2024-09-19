import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (moviesId) => {

    const dispatch = useDispatch();
    const movieTrailer = useSelector((store) => store.addTrailerVideo)

    // fetch trailer video and update the store
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos`, API_OPTIONS);
        const json = await data.json();

        const filterdData = json.results.filter(data => data.type === "Trailer")
        const trailar = filterdData.length ? filterdData[0] : json.results[0];
        dispatch(addTrailerVideo(trailar))
    }

    useEffect(() => {
        !movieTrailer && getMovieVideos()
    }, [])
}


export default useMovieTrailer;