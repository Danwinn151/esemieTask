import React,{useEffect, useState} from 'react'
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
import userDetails from './userDetails';
import Spinner from './spinner';
import MasonryLayout from './MasonryLayout';


//defining the structure data type for our users state

type User = {
    id: number;
    name: string;
    email: string & number;
    address: {
      street: string | number;
      city: string;
      zipcode: number;
    };
    phone: string;
  };

const API_URL:string = "http://localhost:3000/users"


const List:React.FC = () => {
const [user, setUser] = useState<User[]>([])

const navigate = useNavigate()
//function to fetch my data
useEffect(() => {
  const fetchData = async () => {
    try {
       const response = await axios.get<User[]>(API_URL)
    console.log(response.data)
    setUser(response.data)
    console.log(user)
    } catch (error) {
        console.log(error)
    }
    
}

fetchData()
},[])
    //to render my list of users
  return (
       <>
       <div className='flex justify-center py-3 font-sans'>
               <h1 className='text font-sans font-bold'>Find here the selected list of users and their email address</h1>

       </div>
      {!user.length ? (
        <div className='flex justify-center'>
           <Spinner statusMessage='loading users'/>
        </div>
      ): (
        <MasonryLayout>
          {user.map((u, id) => (
            <div key={u.id} className='flex justify-center items-center'>
              <div className='flex flex-col justify-center shadow-md m-2 py-3 w-[350px] items-center'>
                <div className='flex flex-col items-center py-3 px-2 mb-2'>
                  <h1>{u.name}</h1>
                  <p>{u.email}</p>
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