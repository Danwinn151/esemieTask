import React,{useEffect, useState} from 'react'
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
import userDetails from './userDetails';
import Spinner from './spinner';
import MasonryLayout from './MasonryLayout';
import {UserData} from "./models"
import Navbar from './Navbar';
//using my global context

import { useGlobalContext } from './Context';



const List:React.FC = () => {

  //invoking my contextAPI

  const {users, fetchUsers} = useGlobalContext()

  useEffect(() => {
    fetchUsers()
  },[])

const navigate = useNavigate()


    //to render my list of users
  return (
       <>
       <Navbar/>
       <div className='flex justify-center py-3 font-sans'>
               <h1 className='text font-sans font-bold'>Find here the selected list of users and their email address</h1>

       </div>
      {!users?.length ? (
        <div className='flex justify-center'>
           <Spinner statusMessage='loading users'/>
        </div>
      ): (
        <MasonryLayout>
          {users?.map((u, id) => (
            <div key={u.id} className='flex justify-center items-center'>
              <div className='flex flex-col justify-center rounded-md bg-primary shadow-md m-2 py-3 w-[350px] items-center'>
                <div className='flex flex-col items-center py-3 px-2 mb-2'>
                  <h1 className='text-white'>{u.name}</h1>
                  <p className='text-white'>{u.email}</p>
                </div>
                <button
                  className='bg-red-500 text-white rounded-md px-3 py-3'
                  onClick={() => {
                    navigate(`/userDetails/${u.id}`);
                  }}
                >
                  View More Info
                </button>
              </div>
            </div>
          ))}
        </MasonryLayout>
      )} 
       </>
  )
}

export default List