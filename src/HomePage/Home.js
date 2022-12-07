import React from 'react'
import "./Home.css"
import Landing from './Landing'
import FirstCarousel from './FirstCarousel'
import { ProductCarouselData, FirstCarouselData, GadgetData, RecomCarouselData, SellingCarouselData } from '../Data/Data'
import ProductCarousel from "../HomePage/ProductCarousel"
import RecommendCarousel from './RecommendCarousel'
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
  //const { id, name, color, gender, images, final_price, reviews, rating } = item;  
  //const [img, setImg] = useState(images[0]);
/*
  const handleDes = () => {
    navigate(`/productDetails`);
    //navigate(`/productDetails/${id}`);
  };
*/

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
        <ProductCarousel 
          show={2} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {ProductCarouselData.map((product) => {
            return (
              <div key={product.id}>
                <button className=''>{product.btn}</button>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <div className='product-text'>
                <Link to="/productDetails" onClick={() => navigate(product.route)}>
               {/*   <Link onClick={handleDes}>  */}
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
      
        </ProductCarousel>
        <ProductsCarousel />

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
              {/*    <Link onClick={handleDes}>   */}
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

        <SellingCarousel 
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          {SellingCarouselData.map((product) => {
            return (
              <div key={product.id}>
                <button className=''>{product.btn}</button>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <div className='selling-text'>
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


