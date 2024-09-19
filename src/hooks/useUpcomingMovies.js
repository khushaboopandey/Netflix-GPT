

import { useCallback } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addUpcomingMovies } from "../utils/movieSlice"

const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const upcommingMovie = useSelector(store => store.addUpcomingMovies)
    const getUpcomingMovies = useCallback(async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1`, API_OPTIONS);
        const json = await response.json();
        dispatch(addUpcomingMovies(json.results));
    }, [dispatch]); // Dependencies that trigger recomputation

    useEffect(() => {
        !upcommingMovie && getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies



