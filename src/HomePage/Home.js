import React from 'react'
import "./Home.css"
import Landing from './Landing'
import Next from './Next'

function Home() {
  return (
    <>
      <div className='home__container'>
        <Landing />
        <Next />
      </div>
    </>
  )
}

export default Home
