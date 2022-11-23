import React from 'react'
import "./Home.css"
import Landing from './Landing'
import FirstCarousel from './FirstCarousel'
import { ProductCarouselData, FirstCarouselData, GadgetData, RecomCarouselData } from '../Data/Data'
import ProductCarousel from "../HomePage/ProductCarousel"
import RecommendCarousel from './RecommendCarousel'
import Gadget from './Gadget'
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
                <Link to={first.text}>{first.text}</Link>
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
              <Link to="/productDetails" key={product.id}>
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
          {RecomCarouselData.map((recom) => {
            return (
              <Link to="/productDetails" key={recom.id}>
                <button className=''>{recom.btn}</button>
                <div className="img">
                  <img src={recom.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                  <p>{recom.pText}</p>
                  <div>
                    <h5>{recom.Hprice}</h5>
                    <p>{recom.Pprice}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </RecommendCarousel>

        <Gadget
            show={3} 
            style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {
              GadgetData.map((gadget) => {
                return (
                  <div>
                    <div className='gadget-right'>
                      <div className='gadget-text'>
                          <h5>{gadget.header}</h5>
                          <p>{gadget.para}</p>
                      </div>
                      <button>{gadget.btn}</button>
                    </div>
                    <div className="img">
                      <img src={gadget.img} alt="placeholder"  /> 
                    </div>
                  </div>
                )
              })
          }

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
