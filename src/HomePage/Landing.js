import React from 'react'
import "./Landing.css"
import Sidebar from './Sidebar'
import bcg from "../Images/bcg.jpg"
//import Slideshow from './SlideShow'



function Landing() {
  return (
    <div className='landing'>
      <Sidebar />
      <div className='landing__right'>
        <div className='landing__slideShow'>
          
        </div>

        <img src={bcg} alt='background' />  
      </div>
      
    </div>
  )
}

export default Landing
