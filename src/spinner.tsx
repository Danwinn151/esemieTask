import React from 'react'
import {ClipLoader} from "react-spinners"

interface SpinnerProps {
     statusMessage: string
}


const spinner: React.FC<SpinnerProps> = ({statusMessage}) => {
 
  return (
    <div>
         <ClipLoader color="#008000" loading={true} size={35} />
         <p className='text-center font-poppins float-left'>{statusMessage}</p>
    </div>
  )
}

export default spinner