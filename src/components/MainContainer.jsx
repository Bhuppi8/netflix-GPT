import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  )

  if (!movies) return null

  const mainMovie = movies[0]

  const { original_title, overview, id } = mainMovie

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* Background Video */}
        <VideoBackground movieId={id} />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        {/* Movie information */}
        <VideoTitle
          title={original_title}
          overview={overview}
        />
      </div>
        <SecondaryContainer/>
    
    </>
  )
}

export default MainContainer
