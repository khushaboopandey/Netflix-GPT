import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h1>
            <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} poster_path={movie.poster_path} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;


