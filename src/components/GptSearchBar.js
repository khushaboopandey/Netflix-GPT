import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openAi from "../utils/openAi";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const languageKey = useSelector((store => store.config.lang))

    const HandleGptSearchClick = async () => {
        console.log(searchText.current.value);
        const gptQuery = "Act as a movie recommendation and suggest some movies for the query" + searchText.current.value + ". only give me name of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Sholey, Don, GolMal, Koi mil gaya";

        //  make api call to get movie result
        const getGptResult = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(getGptResult.choices);

    }

    return <div className="pt-[10%] flex justify-center">
        <form className="w-1/2  bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="p-4 m-4 col-span-9 rounded  focus:outline-none focus:ring-2 focus:ring-red-600 transition" ref={searchText} placeholder={lang[languageKey].gptsearchplaceHolder} />
            <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg" onClick={HandleGptSearchClick}>{lang[languageKey].search}</button>
        </form>
    </div>;
};

export default GptSearchBar;
