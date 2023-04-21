import React from 'react'
import {VscMenu} from "react-icons/vsc"
import {Link} from "react-router-dom"
import {FaUserAlt} from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className='bg-blue-500 ox-3 py-4'>
       <div className='flex justify-between'>
       <div className="flex justify-center items-center px-3">
            {<VscMenu />}
         </div>

         <div>
           <Link to={"/"}><h1 className='font-poppins font-semibold '>Esemie Task</h1></Link>
         </div>

            <div className='flex justify-center items-center text-[25px] px-3'>
            {<FaUserAlt/>}
            </div>
        </div>
   </nav>
  )
}

export default Navbar