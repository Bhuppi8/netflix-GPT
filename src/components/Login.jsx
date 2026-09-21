import React, { useRef, useState } from 'react'
import Header from './Header'
import netflixBg from '../assets/netflix-bg.jpg' 
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMsg(message)
    if(message) return;

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode+ "-" + errorMessage)
      });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode+ "-" + errorMessage)
      });
    }
    
  }

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
          <form
            onSubmit={(e) => e.preventDefault()}  
            className="w-full max-w-[450px] p-8 md:p-16 bg-black/70 rounded-md text-white flex flex-col backdrop-blur-[2px]"
          >
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
              ref={email}
              type='text' 
              placeholder='Email Address' 
              className='w-full p-4 mb-4 bg-[#161616]/80 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400' 
            />
            <input 
              ref={password}
              type='password' 
              placeholder='password' 
              className='w-full p-4 mb-4 bg-[#161616]/80 text-white rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400' 
              />
            <p className="py-4 text-red-400 text-sm">{errorMsg}</p>
            <button 
              className="w-full bg-[#E50914] text-white p-3.5 rounded font-semibold text-base hover:bg-red-700 transition duration-200 ease-in-out cursor-pointer"
              onClick={handleButtonClick}
            >
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