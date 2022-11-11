import React from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import ProductInfo from './ProductInfo'
import { ProductImgCData } from '../Data/Data'
import ProductImgC from './ProductImgC'
import ProductSection from './ProductSection'
import RecommendCarousel from './RecommendCarousel'
import imgOne from "../Images/recom1.jpg"
import imgTwo from "../Images/recom2.jpg"
import imgThree from "../Images/recom3.jpg"
import imgFour from "../Images/recom4.jpg"


function ProductDetails() {
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
              <img src={imgc.img} alt="aba" />
            )
        })}
        </ProductImgC>
        <ProductSection />
        <RecommendCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <div>
            <button>New</button>
            <div className="img">
              <img src={imgOne} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgTwo} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <button>New</button>
            <div className="img">
              <img src={imgThree} alt="placeholder"  /> 
            </div> 
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgFour} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          
        </RecommendCarousel>

        <RecommendCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <div>
            <button>New</button>
            <div className="img">
              <img src={imgOne} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgTwo} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <button>New</button>
            <div className="img">
              <img src={imgThree} alt="placeholder"  /> 
            </div> 
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgFour} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          
        </RecommendCarousel>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ProductDetails
