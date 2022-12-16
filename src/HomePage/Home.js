import React from 'react'
import "./Home.css"
import Landing from './Landing'
import FirstCarousel from './FirstCarousel'
import { FirstCarouselData, GadgetData } from '../Data/Data'
//import ProductCarousel from "../HomePage/ProductCarousel"
import RecommendsCarousel from './RecommendsCarousel'
import Gadget from './Gadget'
import SellingCarousel from './SellingCarousel'
import Brand from './Brand'
import Discuss from './Discuss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import { Link, useNavigate } from 'react-router-dom'
import ProductsCarousel from './ProductsCarousel'

function Home() {
  const navigate = useNavigate();


  return (
    <>
      <Navbar /> 
      <div className='home__container'>
        <Landing />
        <FirstCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {FirstCarouselData.map((product) => {
            return (
              <div>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <Link to={product.route} onClick={() => navigate(product.route)}>{product.text}</Link>
              </div>
            )
          })}
          
        </FirstCarousel>
      
        <ProductsCarousel />
        <RecommendsCarousel />
        <Gadget
            show={3} 
            style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {
              GadgetData.map((product) => {
                return (
                  <div>
                    <div className='gadget-right'>
                      <div className='gadget-text'>
                          <h5>{product.header}</h5>
                          <p>{product.para}</p>
                      </div>
                      <Link to="/productDetails" onClick={() => navigate(product.route)}>
                 {/*     <Link onClick={handleDes}>  */}
                        {product.btn}
                      </Link>
                    </div>
                    <div className="img">
                      <img src={product.img} alt="placeholder"  /> 
                    </div>
                  </div>
                )
              })
          }

        </Gadget>

        <SellingCarousel />
         
        <Discuss />

        <Brand />

      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home


