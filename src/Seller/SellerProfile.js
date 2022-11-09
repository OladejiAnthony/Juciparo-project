import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import Profile from './Profile'
import SellerNext from './SellerNext'
import "./SellerProfile.css"
import Why from './Why'

function SellerProfile() {
  return (
    <>
      <Navbar /> 
      <div className='sellerProfile'>
        <Profile /> 
        <Why />  
        <SellerNext />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default SellerProfile
