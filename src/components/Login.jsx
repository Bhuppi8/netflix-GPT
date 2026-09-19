import React, { useState } from 'react'
import Header from './Header'
import netflixBg from '../assets/netflix-bg.jpg' 

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
        <div 
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.8) 100%), url(${netflixBg})`
          }}
        >

        <div className="flex justify-center items-center grow px-4 pt-24 pb-12 z-10">
          <form className="w-full max-w-[450px] p-8 md:p-16 bg-black/70 rounded-md text-white flex flex-col backdrop-blur-[2px]">
            <h1 className="text-3xl font-bold mb-7">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input 
                type='text' 
                placeholder='Full Name' 
                className='w-full p-4 mb-4 bg-[#161616]/80 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400' 
              />)
            }
            <input 
              type='text' 
              placeholder='Email Address' 
              className='w-full p-4 mb-4 bg-[#161616]/80 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400' 
            />
            <input 
              type='password' 
              placeholder='password' 
              className='w-full p-4 mb-4 bg-[#161616]/80 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400' 
            />
            <button className="w-full bg-[#E50914] text-white p-3.5 rounded font-semibold text-base hover:bg-red-700 transition duration-200 ease-in-out cursor-pointer">
              Sign In
            </button>
            {/* Toggle Text Links */}
            <p className="text-gray-400 text-sm mt-6">
              {isSignInForm ? "New to Netflix? " : "Already registered? "}
              <span 
                onClick={toggleSignInForm} 
                className="text-white font-medium hover:underline cursor-pointer ml-1"
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </form>

        </div>


        {/* Main Content Area (e.g., Sign In Form or Text) */}
        {/* <div className="flex min-h-screen items-center justify-center px-4 pt-20">
          <div className="text-center text-white max-w-2xl z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-lg md:text-xl font-medium mb-6">
              Starts at ₹149. Cancel anytime.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Login