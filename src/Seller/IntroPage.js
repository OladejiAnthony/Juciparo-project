import React from 'react'
import "./IntroPage.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import SellerLanding from './SellerLanding'
import Why from './Why'
import SellerNext from './SellerNext'

function IntroPage() {
  return (
    <>
      <Navbar /> 
      <div className='introPage__container'>
        <SellerLanding /> 
        <Why />  
        <SellerNext />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default IntroPage
