import React from 'react'
import "./Landing.css"
import Sidebar from './Sidebar'
//import bcg from "../Images/bcg.jpg"
import MyCarousel from './MyOwlCarousel'


function Landing() {
  return (
    <div className='landing'>
      <Sidebar />
      <div className='landing__right'>
        <div className='landing__slideShow'>
         <MyCarousel />
        </div>
      </div>
      
    </div>
  )
}

export default Landing

