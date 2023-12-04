import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


function Profile() {

    const navigate = useNavigate()
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user);

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get(`https://656e21b3bcc5618d3c249139.mockapi.io/logo`)
        .then((response)=>{
            // console.log(response.data);
            const result = response.data.find((item)=>item.name == userData.name)
            // if (result) {
                setData(result)
            // } else {
            //     // navigate('/')
            // }
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    const del = (id)=>{
        axios.delete(`https://656e21b3bcc5618d3c249139.mockapi.io/logo/${id}`)
        .then(()=>{
            // getData()
            navigate('/')
            localStorage.clear()
        })
    }

  return (
    <>

      <div class="bg-gradient-to-br from-gray-900 to-black">
    <div class="text-gray-300 container mx-auto p-8 
    h-screen overflow-hidden flex flex-col items-center 
    justify-center gap-5 md:rounded-lg md:p-10 lg:p-12">
       <div key={data.id} className='border rounded-md p-1 text-center'>
        <div className='w-60 h-60 bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${data.image})`}}></div>
        <div className='p-10'>Name: {data.name}</div>
        <div>Email: {data.email}</div>
        
        <button
        className="px-3 py-2 leading-none text-gray-200 border 
        border-gray-800 rounded-lg focus:outline-none focus:shadow-outline 
        bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black mt-5"
        type="button" 
        onClick={()=>{del(data.id)}}
        >
         Delete account
        </button>
        </div>

        <button
        className="px-3 py-2 leading-none text-gray-200 border 
        border-gray-800 rounded-lg focus:outline-none focus:shadow-outline 
        bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black mt-5"
        type="button" 
        onClick={()=>{{navigate('/')}}}
        >
        Back
        </button>
         

        

    </div>

</div>  
    </>
  )
}

export default Profile