import React, { useState } from 'react'
import netflixLogo from '../assets/logo.png' 
import userIcon from '../assets/user-icon.png' 
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  // State to manage showing/hiding the sign-out menu
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
     .then(() => {
      navigate('/');
      console.log("Signing out...")
    })
    .catch((error)=>{
      navigate('/error');
      console.log("error")
     })
  }

  return (
    <header className="absolute top-0 left-0 w-full z-20 px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Netflix Logo */}
        <img 
          className="w-28 md:w-36" 
          src={netflixLogo} 
          alt="Netflix Logo" 
        />
        
        {/* User Icon & Dropdown Container */}
        {user && 
          <div className="relative">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {/* Primary Profile Image */}
              <img 
                className="w-8 h-8 rounded" 
                src={user?.photoURL}
                alt="User Icon" 
              />
              <span></span>
              <span className={`text-white text-[10px] transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>

            {/* Simple Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 top-10 w-40 bg-black/95 text-white border border-gray-800 rounded py-3 shadow-xl z-30">
                <div 
                  className="text-center text-xs font-medium hover:underline cursor-pointer py-1"
                  onClick={handleSignOut}
                >
                  Sign out of Netflix
                </div>
              </div>
            )}
          </div>
        
        }

      </div>
    </header>
  )
}

export default Header
