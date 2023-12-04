import React from 'react'
import NavBar from '../Compnents/NavBar'
import Footer from '../Compnents/Foot'

function Home() {

//   const user = localStorage.getItem('user')
//   const userData = JSON.parse(user);
  const loggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
        <NavBar/>
        <body class="bg-gradient-to-br from-gray-900 to-black">
    <div class="text-gray-300 container mx-auto p-8 
    h-screen overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        

        <div class="h-32 md:h-40"></div>

        {loggedIn ? (

            <p class="font-sans text-4xl font-bold text-gray-200 
            max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl mt-16">
                View your logo for free in your profile now!
            </p>

            ) : (
                <p class="font-sans text-4xl font-bold text-gray-200 
                 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl mt-16">
                Login now for free to enjoy the website features!
                </p>
            )}

        <div class="h-10"></div>

        <div class="h-32 md:h-40"></div>

        <Footer/>
    </div>
</body>
    </>
  )
}

export default Home