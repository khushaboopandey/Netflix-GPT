import React from "react";

import GptMovieSugggestion from "./GptMovieSugggestion";
import GptSearchBar from "./GptSearchBar";


const GPTSearch = () => {

    return <div>
        <img
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
            alt="background img"
        />
        <GptSearchBar />
        <GptMovieSugggestion />
    </div>;
};

export default GPTSearch;
