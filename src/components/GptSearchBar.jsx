import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //search movie in tmdb database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const query =
      "Act as a movie recomendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 moviees, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Kati Patang, Koi Mil Gaya";

    // 1. Await the API response directly
    const gptResponse = await openai.responses.create({
      model: "gpt-6-luna",
      input: query,
      store: true,
    });

    // 2. Extract the text string
    const movieString = gptResponse.output_text;

    // 3. Split the string by commas into an array and clean up spaces
    const movieArray = movieString.split(",").map((movie) => movie.trim());

    console.log(movieArray);
    // Output example: ["Padosan", "Chupke Chupke", "Gol Maal", "Angoor", "Jaane Bhi Do Yaaro"]

    const promiseArray = movieArray.map((movie) => searchMovieTMDB(movie));
    // [promise, promise, promise, promise, promise]

    const tmdbResult = await Promise.all(promiseArray);

    console.log("tmdb result: ", tmdbResult);

    dispatch(
      addGptMovieResult({ movieNames: movieArray, movieResults: tmdbResult }),
    );
  };

  return (
    <div className="flex w-full justify-center px-4 pt-24 sm:pt-32">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-black/80 p-4 shadow-2xl backdrop-blur-sm sm:flex-row"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="min-w-0 flex-1 rounded-lg border border-gray-600 bg-gray-900 px-5 py-3 text-base text-white outline-none placeholder:text-gray-400 transition focus:border-red-600 focus:ring-2 focus:ring-red-600/40"
        />

        <button
          type="submit"
          className="rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
