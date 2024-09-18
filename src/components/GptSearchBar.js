import React, { useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openAi from "../utils/openAi";
import axios from 'axios';
import { API_OPTIONS } from "../utils/constant";
import { getMovieSearch } from "../utils/gptSlice";


const GptSearchBar = () => {
    const [movieSearch, SetMovieSearch] = useState(null)
    const searchText = useRef(null);
    const languageKey = useSelector((store => store.config.lang))
    const dispatch = useDispatch()

    const HandleGptSearchClick = async () => {
        // try {
        // console.log(searchText.current.value);
        // const gptQuery = "Act as a movie recommendation and suggest some movies for the query " + searchText.current.value + ". Only give me the names of 5 movies, comma-separated like the example given ahead. Example Result: Gadar, Sholey, Don, GolMal, Koi mil gaya.";

        // the api is not free so i am not using this, for now i am going with different free api Hugging Face
        // Make API call to get GPT result
        // const getGptResult = await openAi.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        // });

        // console.log(getGptResult.choices);
        // } catch (error) {
        //     if (error.status === 429) {
        //         console.error("API Quota Exceeded. Please try again later.");
        //         alert("You have exceeded the API quota. Please try again later.");
        //     } else {
        //         console.error("API Error:", error.message);
        //         alert("An error occurred. Please check the console for details.");
        //     }
        // }

        const query = searchText.current.value;
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, API_OPTIONS);

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            SetMovieSearch(data)
            dispatch(getMovieSearch(data?.results))

            console.log(data);  // This will log the movie search result
        } catch (error) {
            console.error("Error fetching movie data:", error.message);
        }

    };
    return <div>
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2  bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="p-4 m-4 col-span-9 rounded  focus:outline-none focus:ring-2 focus:ring-red-600 transition" ref={searchText} placeholder={lang[languageKey].gptsearchplaceHolder} />
                <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg" onClick={HandleGptSearchClick}>{lang[languageKey].search}</button>
            </form>
        </div>
        {(movieSearch?.results?.length > 1 || movieSearch?.results?.length === 0) && <p className="text-white flex justify-center font-extrabold p-2">{movieSearch?.results?.length > 0 ? movieSearch?.results?.length + " Result found." : "No Result found."}</p>}    </div>
};

export default GptSearchBar;
