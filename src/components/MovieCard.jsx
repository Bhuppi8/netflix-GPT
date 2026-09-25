import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <div className="group w-64 flex-none cursor-pointer overflow-hidden rounded-xl bg-gray-800 transition duration-300 hover:scale-105">
        <img 
          alt='Movie card' 
          src={IMG_CDN_URL + posterPath}
          loading="lazy"
          className="h-36 w-full object-cover"
        />
      </div>
    </div>
  )
}

export default MovieCard