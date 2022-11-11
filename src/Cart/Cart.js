import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import "./Cart.css"
import CartOne from './CartOne'
import Summary from './Summary'

function Cart() {
  return (
    <>
      <Navbar />
      <div className='cart__container'>
        <CartOne  />
        <Summary />
      </div>
      <Newsletter />
      <Footer />
    </>
    
  )
}

export default Cart
