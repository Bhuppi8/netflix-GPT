import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="bg-[#141414] px-6 py-5 text-white">
      <h2 className="mb-4 text-2xl font-bold">
        {title}
      </h2>

      <div
        ref={containerRef}
        className="movie-scroll-row flex flex-nowrap gap-4 overflow-x-auto"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={title}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;