import React from 'react'
import "./Home.css"
import Landing from './Landing'
import FirstCarousel from './FirstCarousel'
import { FirstCarouselData } from '../Data/Data'
import ProductCarousel from "../HomePage/ProductCarousel"
import { ProductCarouselData } from '../Data/Data'

import RecommendCarousel from './RecommendCarousel'
import imgOne from "../Images/recom1.jpg"
import imgTwo from "../Images/recom2.jpg"
import imgThree from "../Images/recom3.jpg"
import imgFour from "../Images/recom4.jpg"
import Gadget from './Gadget'
import Gad from "../Images/gadget1.jpg"
import GadTwo from "../Images/gadget2.png"
import SellingCarousel from './SellingCarousel'
import imgA from "../Images/product1.jpg"
import imgB from "../Images/product2.jpg"
import imgC from "../Images/product3.jpg"
import imgD from "../Images/product4.jpg"

import Brand from './Brand'
import Discuss from './Discuss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
      <Navbar /> 
      <div className='home__container'>
        <Landing />
        <FirstCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {FirstCarouselData.map((first) => {
            return (
              <div>
                <div className="img">
                  <img src={first.img} alt="placeholder"  /> 
                </div>
                <p>{first.text}</p>
              </div>
            )
          })}
          
        </FirstCarousel>
        <ProductCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {ProductCarouselData.map((product) => {
            return (
              <Link to="/productDetails">
                <button className=''>{product.btn}</button>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                  <p>{product.pText}</p>
                  <div>
                    <h5>{product.Hprice}</h5>
                    <p>{product.Pprice}</p>
                  </div>
                </div>
              </Link>
            )
          })}
      
        </ProductCarousel>
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
        <Gadget
            show={3} 
            style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <div>
              <div className='gadget-right'>
                <div className='gadget-text'>
                    <h5>Quality Headset</h5>
                    <p>Get this headset at an affordable price.</p>
                </div>
                <button>Shop Now</button>
              </div>
              <div className="img">
                <img src={Gad} alt="placeholder"  /> 
              </div>
          </div>
          <div>
              <div className='gadget-right'>
                <div className='gadget-text'>
                    <h5>Quality Headset</h5>
                    <p>Get this headset at an affordable price.</p>
                </div>
                <button>Shop Now</button>
              </div>
              <div className="img">
                <img src={GadTwo} alt="placeholder"  /> 
              </div>
          </div>
        </Gadget>

        <SellingCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <div>
            <div className="img">
              <img src={imgA} alt="placeholder"  /> 
            </div>
            <div className='selling-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgB} alt="placeholder"  /> 
            </div>
            <div className='selling-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgC} alt="placeholder"  /> 
            </div> 
            <div className='selling-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          <div>
            <div className="img">
              <img src={imgD} alt="placeholder"  /> 
            </div>
            <div className='selling-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
      
        </SellingCarousel>
        <Discuss />

        <Brand />

      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
