import React from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import ProductInfo from './ProductInfo'
import { ProductImgCData, RecomCarouselData } from '../Data/Data'
import ProductImgC from './ProductImgC'
import ProductSection from './ProductSection'
import RecommendCarousel from './RecommendCarousel'
import { Link, useNavigate } from 'react-router-dom'


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
        <ProductSection />
        <RecommendCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {RecomCarouselData.map((recom) => {
            return (
              <div  key={recom.id}>
                <button className=''>{recom.btn}</button>
                <div className="img">
                  <img src={recom.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                  <Link to="/productDetails" onClick={() => navigate(recom.route)}>
                    {recom.pText}
                  </Link>
                  <div>
                    <h5>{recom.Hprice}</h5>
                    <p>{recom.Pprice}</p>
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
          {RecomCarouselData.map((recom) => {
            return (
              <div  key={recom.id}>
                <button className=''>{recom.btn}</button>
                <div className="img">
                  <img src={recom.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                  <Link to="/productDetails" onClick={() => navigate(recom.route)}>
                    {recom.pText}
                  </Link>
                  <div>
                    <h5>{recom.Hprice}</h5>
                    <p>{recom.Pprice}</p>
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
