import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  )

  useMovieTrailer(movieId)

  if (!trailerVideo?.key) return null

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <iframe
        className="
          absolute
          top-1/2
          left-1/2
          w-[177.78vh]
          h-[56.25vw]
          min-w-full
          min-h-full
          -translate-x-1/2
          -translate-y-1/2
          scale-110
        "
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1&controls=0&loop=1&playlist="+trailerVideo.key +"+&rel=0&modestbranding=1"}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  )
}

export default VideoBackground
