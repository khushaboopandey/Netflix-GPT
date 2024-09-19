import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addTrandingMovies } from "../utils/movieSlice"

const useTrandingMovies = () => {

    const dispatch = useDispatch()
    const trandingMovie = useSelector((store) => store.addTrandingMovies)
    const getTrandingMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?page=1`, API_OPTIONS);
        const json = await response.json()
        dispatch(addTrandingMovies(json.results))
    }

    useEffect(() => {
        !trandingMovie && getTrandingMovies()
    }, [])
}

export default useTrandingMovies



