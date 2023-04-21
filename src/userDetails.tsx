import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Spinner from './spinner'
import {FaUser} from "react-icons/fa"
import { UserData } from './models'
import Navbar from './Navbar'




const userDetails = () => {
 const [specificUser, setSpecificUser] = useState<UserData | null>(null)
  const API_BASE_URL = 'http://localhost:3000/users'
  const {id} = useParams()
  useEffect(() => {
    const getSpecificUser = async () => {
       const response = await axios.get<UserData>(`${API_BASE_URL}/${id}`)
       console.log(response.data)
       setSpecificUser(response.data)
       console.log(specificUser)
    }
    getSpecificUser()
  },[])
  return (
    <div>
    <Navbar/>
     {specificUser ? (
      <div className='bg-white w-full flex py-4 justify-center items-center outline-none rounded-md px-3 m-2'>
        <div className='px-5 py-8 shadow-md rounded-md'>
          <div className='flex flex-col items-center justify-center'>
            <FaUser className=''/>
          <h2 className='font-bold font-poppins text-center'>{`${specificUser.name}`} Details</h2>
          </div>
          
          
          <p>Name: {specificUser.name}</p>
          <p>Email: {specificUser.email}</p>
          <p>Address info</p> 
          <ul>
            <li className='text-black '>Street: {specificUser?.address.street}</li>
            <li>City: {specificUser.address.city}</li>
            <li>Zipcode: {specificUser.address.zipcode}</li>
          </ul>
          <p>Phone: {specificUser.phone}</p>
          <div className='flex rounded-md justify-center '>
            <button className='bg-blue-500 rounded-md px-3 py-3'>
              <Link to={"/list"}>
              Go Back
          </Link>
            </button>
            
          </div>
          
      </div>
        </div>
         
     ): 
     <div className='flex justify-center px-3 py-3'>
      <Spinner statusMessage={`loading user info`}/>
      </div>}
    </div>
  );
}

export default userDetails