import React from 'react'
import { useNavigate,Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar'
const home = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center py-3 justify-center'>
        <h2 className='font-bold font-poppins'>You are welcome to esemie assigmnent task</h2>
    <p className='font-thin'>Tap to view users</p>
     <button className='bg-green-500 rounded-md px-3 py-4' onClick={() => {
      navigate("/list")
     }}>View users</button>
     </div>
    </>
    
  )
}

export default home