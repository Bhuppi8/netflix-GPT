import React from 'react'
import netflixLogo from '../assets/logo.png' 

const Header = () => {
  return (
    // 'absolute' allows the header to sit on top of the background image
    <header className="absolute top-0 left-0 w-full z-10 px-8 py-4 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Netflix Logo */}
        <img 
          className="w-36 md:w-44" 
          src={netflixLogo} 
          alt="Netflix Logo" 
        />
        
        {/* Optional Sign In Button */}
        <button className="bg-red-600 text-white px-4 py-1.5 rounded font-medium text-sm hover:bg-red-700 transition">
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Header
