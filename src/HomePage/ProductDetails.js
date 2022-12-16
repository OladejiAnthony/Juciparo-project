import React, { useEffect, useState } from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import ProductInfo from './ProductInfo'
//import { ProductImgCData } from '../Data/Data'
import ProductImgC from './ProductImgC'
//import RecommendCarousel from './RecommendCarousel'
import { Link} from 'react-router-dom'
import ProductDetailsTabs from './ProductSection'
import RecommendsCarousel from './RecommendsCarousel'
import { useParams } from 'react-router-dom';

//use react-redux to get current product images, descriptions.

function ProductDetails() {
  //const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      //setLoading(false);
    };
    getProduct();
  }, [id]);
  
  return (
    <>
      <Navbar /> 
      <div className='productDetails__container'>
        <ProductInfo /> 
        <ProductImgC
          show={3} 
          style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
        >
          <img  src={product.image} alt={product.title} />
          <img  src={product.image} alt={product.title} />
          <img  src={product.image} alt={product.title} />
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
