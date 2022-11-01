import React from 'react'
import "./Landing.css"
import Sidebar from './Sidebar'
//import bcg from "../Images/bcg.jpg"
import Slideshow from './SlideShow'

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]


function Landing() {
  return (
    <div className='landing'>
      <Sidebar />
      <div className='landing__right'>
        <div className='landing__slideShow'>
          <Slideshow slides={images} autoPlay={2} />
        </div>

       {/*  <img src={bcg} alt='background' />  */} 
      </div>
      
    </div>
  )
}

export default Landing
