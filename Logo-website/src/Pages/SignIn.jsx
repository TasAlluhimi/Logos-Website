import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate()

    const [validationError, setValidationError] = React.useState()
    const [userData, setUserData] = React.useState({
        name: '',
        password: '',
    })

    const SignInInputs = (event)=>{
        setUserData({...userData,
            [event.target.name]: event.target.value
        })
    }

    const submit = ()=>{
       

        if (!userData.name) {
            setValidationError('Please enter your name');
            return;
          }

        if (!userData.password) {
            setValidationError('Please enter your password');
            return;
          }

        axios.get(`https://656e21b3bcc5618d3c249139.mockapi.io/logo`)
        .then((response)=>{
            // console.log(response.data.name);
            const result = response.data.find((item)=>item.name == userData.name)
            if (userData.name == result.name && userData.password == result.password) {
                navigate('/')
                localStorage.setItem('user', JSON.stringify(userData))
                localStorage.setItem('isLoggedIn', true)
            } else {
                setValidationError('Name or passowrd is wrong');
            }
            
        })
        .catch((error)=>{
            console.error(error);
            setValidationError("Somthing went wrong.. please try again later")
        })

    }

  return (
    <>
        <div className='bg-gradient-to-br from-gray-900 to-black'>
    <div class="text-gray-300 container mx-auto p-8 
    h-screen overflow-hidden flex flex-col items-center 
    justify-center gap-5 md:rounded-lg md:p-10 lg:p-12">
        <p className='text-white text-xl p-3'>Sign In</p>
        <p className='text-red-700'>{validationError}</p>

        <input 
        type="text" 
        className='rounded-md text-black'
        name='name'
        value={userData.name}
        placeholder='Enter Your name'
        onChange={SignInInputs}
        />

        <input 
        type="password" 
        className='rounded-md text-black'
        name='password'
        value={userData.password}
        placeholder='Enter Your password'
        onChange={SignInInputs}
        />

        <p className='text-white'>Don't have an account? 
        <Link className='font-bold' 
        to='/SignUp'>Sign Up</Link></p>

        <button
        className="px-3 py-2 leading-none text-gray-200 border 
        border-gray-800 rounded-lg focus:outline-none focus:shadow-outline 
        bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
        type="button" onClick={submit}
        >
        Sign In
        </button>

    </div>
    </div>
    </>
  )
}

export default SignIn