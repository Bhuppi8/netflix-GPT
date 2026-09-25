import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex items-end z-10">
      <div className="w-full md:w-[55%] lg:w-[50%] px-6 md:px-10 lg:px-12 pb-16">

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="mt-3 text-sm md:text-base text-white leading-relaxed max-w-xl line-clamp-3">
          {overview}
        </p>

        <div className="flex items-center gap-3 mt-5">
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition cursor-pointer">
            ▶ Play
          </button>

          <button className="bg-gray-500/70 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-500/90 transition cursor-pointer">
            ⓘ More Info
          </button>
        </div>

      </div>
    </div>
  )
}

export default VideoTitle
