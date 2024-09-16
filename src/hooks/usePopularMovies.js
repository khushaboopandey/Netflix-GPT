import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS, API_KEY } from "../utils/constant"
import { addPopularMovies } from "../utils/movieSlice"

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const getPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, API_OPTIONS);
        const json = await response.json()
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies



