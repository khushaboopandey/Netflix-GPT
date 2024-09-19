import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constant'

const GptMovieSugggestion = () => {
    const searchedMovies = useSelector(store => store?.gpt)

    // Check if movieSearch exists, if not return null
    if (!searchedMovies?.movieSearch) return null;

    return (
        searchedMovies?.movieSearch.length > 0 && (
            <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {searchedMovies?.movieSearch[0]?.title}
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {searchedMovies?.movieSearch.map((movie) => (
                        movie?.poster_path ? (
                            <div key={movie.id} className="transition-transform transform hover:scale-110">
                                <img
                                    className="rounded-lg shadow-md w-48"
                                    src={IMG_CDN_URL + movie.poster_path}
                                    alt="Movie Poster"
                                />
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        )
    )
}

export default GptMovieSugggestion
