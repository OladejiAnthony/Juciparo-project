import React from 'react'
import "./Home.css"
import Landing from './Landing'
import FirstCarousel from './FirstCarousel'
import img1 from "../Images/pngwing.jpg"
import img2 from "../Images/pngwing1.jpg"
import img3 from "../Images/pngwing2.jpg"
import img4 from "../Images/pngwing3.jpg"
import ProductCarousel from './ProductCarousel'
import imgA from "../Images/product1.jpg"
import imgB from "../Images/product2.jpg"
import imgC from "../Images/product3.jpg"
import imgD from "../Images/product4.jpg"

function Home() {
  return (
    <>
      <div className='home__container'>
        <Landing />
        <FirstCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <div>
            <div className="img">
              <img src={img1} alt="placeholder"  /> 
            </div>
            <p>Fashion</p>
          </div>
          <div>
            <div className="img">
              <img src={img2} alt="placeholder"  /> 
            </div>
            <p>Computers</p>
          </div>
          <div>
            <div className="img">
              <img src={img3} alt="placeholder"  /> 
            </div> 
            <p>Home & Office</p>
          </div>
          <div>
            <div className="img">
              <img src={img4} alt="placeholder"  /> 
            </div>
            <p>Phone & Tablet</p>
          </div>
          <div>
            <div className="img">
              <img src={img1} alt="placeholder"  /> 
            </div>
            <p>Others</p>
          </div>
          <div>
            <div className="img">
              <img src={img2} alt="placeholder"  /> 
            </div>
            <p>Electronics</p>
          </div>
         
        </FirstCarousel>
        <ProductCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <div>
            <button>New</button>
            <div className="img">
              <img src={imgA} alt="placeholder"  /> 
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
              <img src={imgB} alt="placeholder"  /> 
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
              <img src={imgC} alt="placeholder"  /> 
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
              <img src={imgD} alt="placeholder"  /> 
            </div>
            <div className='product-text'>
              <p>Adidas sport sneakers</p>
              <div>
                <h5>#500</h5>
                <p>#600</p>
              </div>
            </div>
          </div>
          
          
        </ProductCarousel>
      </div>
    </>
  )
}

export default Home
