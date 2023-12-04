import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  const user = localStorage.getItem('user')
  const userData = JSON.parse(user);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

 

    const navigate = useNavigate()

    const sign_out = () => {
        localStorage.clear()
        setLoggedIn(false);
    };


  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

//   useEffect(()=>{
    
//   }, [])

  return (
    <nav className={`border-gray-200 dark:bg-gray-900 fixed w-full border-none`}>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src='https://cdn-icons-png.flaticon.com/128/5448/5448104.png' className="h-16" alt="Logo" /> */}
          <p className='font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl'>Logos</p>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
        {loggedIn ? (
            
            
            <div className='flex justify-center items-center gap-3'>
                <p className='text-white'>Hey, {userData.name}♡</p>
             <button
              type="button"
              onClick={sign_out}
              className="self-start px-3 py-2 leading-none text-gray-200 border 
              border-gray-800 rounded-lg focus:outline-none focus:shadow-outline 
              bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
            >
              Sign out
            </button>
            </div>
             

            ) : (
                <button
                  className="self-start px-3 py-2 leading-none text-gray-200 border 
                  border-gray-800 rounded-lg focus:outline-none focus:shadow-outline 
                  bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
                  type="button" 
                  onClick={()=>{{navigate('/SignUp')}}}
                >
                  Sign Up
                </button>
            )}


          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={showMobileMenu}
            onClick={mobileMenuClick}
          >

            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMobileMenu ? 'block' : 'hidden'}`}
          id="navbar-cta"
        >
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
          md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 
          md:dark:bg-gray-900 dark:border-gray-700 mr-10`}>
            <li>
              <Link to="/" className={`block py-2 px-3 md:p-0 rounded 
               md:dark:hover:bg-transparent text-white`}>
                Home
              </Link>
            </li>
            <li>
            </li>

            {loggedIn? 
            <li>
              <Link
                to="/Profile"
                className={`block py-2 px-3 md:p-0 rounded 
                md:dark:hover:bg-transparent text-white`}
              >
                Profile
              </Link>
            </li>
            :''}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;