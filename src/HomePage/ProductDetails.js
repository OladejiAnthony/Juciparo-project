import React from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import ProductInfo from './ProductInfo'
import { ProductImgCData, RecomCarouselData } from '../Data/Data'
import ProductImgC from './ProductImgC'
import RecommendCarousel from './RecommendCarousel'
import { Link, useNavigate } from 'react-router-dom'
import ProductDetailsTabs from './ProductSection'

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
          <h4>Sold by <span>Jmk Store</span></h4>
        </div>
        
        <RecommendCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {RecomCarouselData.map((product) => {
            return (
              <div  key={product.id}>
                <button className=''>{product.btn}</button>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                  <Link to="/productDetails" onClick={() => navigate(product.route)}>
                    {product.pText}
                  </Link>
                  <div>
                    <h5>{product.Hprice}</h5>
                    <p style={{ textDecoration: "line-through" }}>{product.Pprice}</p>
                  </div>
                </div>
              </div>
            )
          })}


        </RecommendCarousel>

        <RecommendCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {RecomCarouselData.map((product) => {
            return (
              <div  key={product.id}>
                <button className=''>{product.btn}</button>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                  <Link to="/productDetails" onClick={() => navigate(product.route)}>
                    {product.pText}
                  </Link>
                  <div>
                    <h5>{product.Hprice}</h5>
                    <p style={{ textDecoration: "line-through" }}>{product.Pprice}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </RecommendCarousel>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductDetails
