import React from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import Why from '../Seller/Why'
import SellerNext from '../Seller/SellerNext'
import ProductInfo from './ProductInfo'


function ProductDetails() {
  return (
    <>
      <Navbar /> 
      <div className='productDetails__container'>
        <ProductInfo /> 
        <Why />  
        <SellerNext />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductDetails
