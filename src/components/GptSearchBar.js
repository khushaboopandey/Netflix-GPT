import React, { useState, useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { getMovieSearch } from "../utils/gptSlice";

const GptSearchBar = () => {
    const [movieSearch, setMovieSearch] = useState(null);
    const searchText = useRef(null);
    const languageKey = useSelector((store) => store.config.lang);
    const dispatch = useDispatch();

    const handleGptSearchClick = async () => {
        const query = searchText.current.value;
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, API_OPTIONS);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setMovieSearch(data);
            dispatch(getMovieSearch(data?.results));
        } catch (error) {
            console.error("Error fetching movie data:", error.message);
        }
    };

    return (
        <div>
            <div className="pt-[10%] flex justify-center">
                <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        className="p-4 m-4 col-span-9 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                        ref={searchText}
                        placeholder={lang[languageKey].gptsearchplaceHolder}
                    />
                    <button
                        className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg"
                        onClick={handleGptSearchClick}
                    >
                        {lang[languageKey].search}
                    </button>
                </form>
            </div>
            {movieSearch && (
                <p className="text-white flex justify-center font-extrabold p-2">
                    {movieSearch?.results?.length > 0
                        ? `${movieSearch.results.length} Result(s) found.`
                        : "No Result found."}
                </p>
            )}
        </div>
    );
};

export default GptSearchBar;
