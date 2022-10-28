import React from 'react'
import "./Landing.css"
import Sidebar from './Sidebar'
import bcg from "../Images/bcg.jpg"

function Landing() {
  return (
    <div className='landing'>
      <Sidebar />
      <div className='landing__right'>
        <img src={bcg} alt='background' />
        <div className='landing__text'>
            kshdjks
        </div>
      </div>
      
    </div>
  )
}

export default Landing
