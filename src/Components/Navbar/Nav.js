import React from 'react'
import {BiCameraMovie} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import './Nav.css'
const Nav = () => {
  return (
    <nav>
        <div className='logo'> <BiCameraMovie/> Shindy </div>
        <div className='search_main'>
        <AiOutlineSearch className='search'/>
        <input className='input' value="Search for your fav...." placeholder=''/>
         </div>

         <div className='button_d'> 
         <button>Log In</button>
         <button>Sign In</button>
          </div>
         
    </nav>
  )
}

export default Nav