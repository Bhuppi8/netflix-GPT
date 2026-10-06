import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="min-h-screen bg-black px-4 py-8 sm:px-8 md:px-12">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={`${movieName}-${index}`}
          title={movieName}
          movies={movieResults[index] ?? []}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
