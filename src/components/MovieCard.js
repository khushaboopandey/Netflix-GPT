import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
    return (
        <div className="w-40 md:w-48 flex-shrink-0 transition-transform transform hover:scale-110">
            <img
                className="rounded-lg shadow-md"
                src={IMG_CDN_URL + poster_path}
                alt="Movie Poster"
            />
        </div>
    );
};

export default MovieCard;



