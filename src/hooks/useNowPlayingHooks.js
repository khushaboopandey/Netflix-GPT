import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addNowPlayingMovies } from "../utils/movieSlice"

const useNowPlayingHooks = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies()
    }, [])
}

export default useNowPlayingHooks