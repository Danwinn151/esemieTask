import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Spinner from './spinner'





const userDetails = () => {
  //to get a specific info for a user

    

   type UserInfo = {
    id: number;
    name: string;
    email: string & number;
    address: {
      street: string;
      city: string | number;
      zipcode: number | number;
    };
    phone: string | number;
  };
 const [specificUser, setSpecificUser] = useState<UserInfo | null>(null)
  const API_BASE_URL = 'http://localhost:3000/users'
  const {id} = useParams()
  useEffect(() => {
    const getSpecificUser = async () => {
       const response = await axios.get<UserInfo>(`${API_BASE_URL}/${id}`)
       console.log(response.data)
       setSpecificUser(response.data)
       console.log(specificUser)
    }
    getSpecificUser()
  },[])
  return (
    <div>
     {specificUser ? (
      <div className='bg-white w-full flex py-4 justify-center items-center outline-none rounded-md px-3 m-2'>
        <div className='px-5 py-8 shadow-md rounded-md'>
          <h2 className='font-bold font-poppins text-center'>{`${specificUser.name}`} Details</h2>
          <p>Name: {specificUser.name}</p>
          <p>Email: {specificUser.email}</p>
          <p>Address info</p> 
          <ul>
            <li className='text-black '>Street: {specificUser?.address.street}</li>
            <li>City: {specificUser.address.city}</li>
            <li>Zipcode: {specificUser.address.zipcode}</li>
          </ul>
          <p>Phone: {specificUser.phone}</p>
      </div>
        </div>
         
     ): 
     <div className='flex justify-center px-3 py-3'>
      <Spinner statusMessage='loading user info'/>
      </div>}
    </div>
  );
}

export default userDetails