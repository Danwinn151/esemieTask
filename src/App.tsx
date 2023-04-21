import { useState } from 'react'
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import UserDetails from './userDetails'
import './App.css'
import Home from './containers/Home'
import List from './user'
function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  return (
    <>
         <Routes>

         <Route path='/' element={<Home/>}/> 
             <Route path="/userDetails/:id" element={<UserDetails/>}/>
            <Route path='/list' element={<List/>}/> 
            
         </Routes>
    </>
   
  )
}

export default App
