import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const languageKey = useSelector((store => store.config.lang))

    return <div className="pt-[10%] flex justify-center">
        <form className="w-1/2  bg-black grid grid-cols-12 rounded-lg">
            <input type="text" className="p-4 m-4 col-span-9 rounded  focus:outline-none focus:ring-2 focus:ring-red-600 transition" placeholder={lang[languageKey].gptsearchplaceHolder} />
            <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg">{lang[languageKey].search}</button>
        </form>


    </div>;
};

export default GptSearchBar;
