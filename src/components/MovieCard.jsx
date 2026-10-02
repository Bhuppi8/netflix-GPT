import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 shrink-0 sm:w-44 md:w-48">
      <div className="aspect-[2/3] overflow-hidden rounded-lg bg-zinc-800">
        <img 
          alt='Movie card' 
          src={IMG_CDN_URL + posterPath}
          loading="lazy"
           className="block h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default MovieCard