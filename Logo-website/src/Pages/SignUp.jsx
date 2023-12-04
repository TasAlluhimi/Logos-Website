import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate()

    const [validationError, setValidationError] = React.useState()
    const [inputs, setInputs] = React.useState({
        name: '',
        image: '',
        email: '',
        password: '',
    });

    const SignUpInputs = (event)=>{
        setInputs({...inputs,
            [event.target.name]: event.target.value
        })
    }

    const submit = ()=>{
        if (inputs.name.length < 3) {
            setValidationError('Name should be at least 3 characters long');
            return;
          }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
            setValidationError('Please enter a valid email');
            return;
          }

        if (!inputs.password || inputs.password.length < 6) {
            setValidationError('Password should be longer than 6 characters long');
            return;
          }

        axios.post(`https://656e21b3bcc5618d3c249139.mockapi.io/logo`, {
            name: inputs.name,
            image: inputs.image,
            email: inputs.email,
            password: inputs.password,
        })
        .then(()=>{
            navigate('/')
            localStorage.setItem('user', JSON.stringify(inputs))
            localStorage.setItem('isLoggedIn', true)
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
        <p className='text-white text-xl p-3'>Sign up</p>
        <p className='text-red-700'>{validationError}</p>

        <input 
        type="text" 
        className='rounded-md text-black'
        name='name'
        value={inputs.name}
        placeholder='Enter Your name'
        onChange={SignUpInputs}
        />

        <input 
        type="text" 
        className='rounded-md text-black'
        name='image'
        value={inputs.image}
        placeholder='Enter Your logo image'
        onChange={SignUpInputs}
        />

        <input 
        type="email" 
        className='rounded-md text-black'
        name='email'
        value={inputs.email}
        placeholder='Enter Your email'
        onChange={SignUpInputs}
        />

        <input 
        type="password" 
        className='rounded-md text-black'
        name='password'
        value={inputs.password}
        placeholder='Enter Your password'
        onChange={SignUpInputs}
        />

        <p className='text-white'>Already have an account? 
        <Link className='font-bold' 
        to='/SignIn'>Sign in</Link></p>

        <button
        className="px-3 py-2 leading-none text-gray-200 border 
        border-gray-800 rounded-lg focus:outline-none focus:shadow-outline 
        bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
        type="button" onClick={submit}
        >
        Sign Up
        </button>

    </div>
    </div>
    </>
  )
}

export default SignUp