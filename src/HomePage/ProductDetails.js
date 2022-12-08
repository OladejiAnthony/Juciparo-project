import React from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import ProductInfo from './ProductInfo'
import { ProductImgCData } from '../Data/Data'
import ProductImgC from './ProductImgC'
//import RecommendCarousel from './RecommendCarousel'
import { Link, useNavigate } from 'react-router-dom'
import ProductDetailsTabs from './ProductSection'
import RecommendsCarousel from './RecommendsCarousel'

//use react-redux to get current product images, descriptions.

function ProductDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar /> 
      <div className='productDetails__container'>
        <ProductInfo /> 
        <ProductImgC
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
        {ProductImgCData.map((imgc) => {
            return (
              <img key={imgc.id} src={imgc.img} alt="aba" />
            )
        })}
        </ProductImgC>

        <ProductDetailsTabs />

        <div className='storeName'>
          <h4>Sold by <Link to="/SellerProfile">Jmk Store</Link></h4>
        </div>
        <RecommendsCarousel />
        <RecommendsCarousel />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductDetails
