import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import './Footer.css'
const Footer = () => {
  return (
    <div className='main_f'>
    <span className='soc'> <AiOutlineInstagram/>  <AiOutlineFacebook/> <BsTwitter/>  </span>
    <span className='righhts'>All rights reserved © shindy.com</span>
    </div>
  )
}

export default Footer