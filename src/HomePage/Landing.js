import React from 'react'
import "./Landing.css"
import Sidebar from './Sidebar'
import bcg from "../Images/bcg.jpg"
import Slideshow from './SlideShow'

function Landing() {
  return (
    <div className='landing'>
      <Sidebar />
      <div className='landing__right'>
        <div className='landing__slideShow'>
          <Slideshow />
        </div>

        <img src={bcg} alt='background' />
        <div className='landing__text'>
            kshdjks
        </div>
      </div>
      
    </div>
  )
}

export default Landing
