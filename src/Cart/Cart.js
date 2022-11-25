import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import "./Cart.css"
import CartOne from './CartOne'
import Shopping from './Shopping'
import Summary from './Summary'


//use material ui badge
//use react-redux for cart

function Cart() {
  return (
    <>
      <Navbar />
      <div className='cart__container'>
        <CartOne 
          productName = "HP LAPTOP: 12INCHES WITH 1TB AND 64BITS OS "
          productPrice = "100000"
        />
        <Summary 
          head = "Cart Summary"
          subTotal = "SubTotal"
          price = "100000"
          delivery = "Delivery"
          status = "Not yet added"
        />
      </div>
      <Shopping />
      <Newsletter />
      <Footer />
    </>
    
  )
}

export default Cart
