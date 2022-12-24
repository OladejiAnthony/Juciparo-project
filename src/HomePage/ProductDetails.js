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
import axios from 'axios'

//use react-redux to get current product images, descriptions.

function ProductDetails() {
  //const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    //setLoading(true);
    const response = await axios.get(`https://admin.juciparo.com/api/v1/products${id}`)
    .then(function(response) {
      console.log(response?.data?.data);
      setProduct(response?.data?.data)
    })
    
    };

    useEffect(() => {
      getProducts();
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
          <img src={`https://admin.juciparo.com${product.photo}`} alt={product.title} />
          <img src={`https://admin.juciparo.com${product.photo}`} alt={product.title} />
          <img src={`https://admin.juciparo.com${product.photo}`} alt={product.title} />
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
