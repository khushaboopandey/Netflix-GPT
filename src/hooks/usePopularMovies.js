import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addPopularMovies } from "../utils/movieSlice"

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const popularMovies = useSelector((store) => store.addPopularMovies);

    const getPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, API_OPTIONS);
        const json = await response.json()
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        !popularMovies && getPopularMovies()
    }, [])
}

export default usePopularMovies



