import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies);

  const handleWheel = (e) =>{
    const container = e.currentTarget;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    } 
  }
  return (
     <section className="bg-[#141414] px-6 py-5 text-white">
      <h2 className="mb-4 text-2xl font-bold">
        {title}
      </h2>

      <div
        onWheel={handleWheel} 
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
  )
}

export default MovieList