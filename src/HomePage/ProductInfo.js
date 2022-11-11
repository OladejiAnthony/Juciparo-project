import React from 'react'
import "./ProductInfo.css"
import prod from "../Images/recom1.jpg"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


function ProductInfo() {
  return (
    <div className='productInfo__container'>
      <h5>Product Information</h5>
      <div className='productInfo'>
        <div className='prod_img'>
            <img src={prod} alt="products" />
        </div>
        <div className='productInfo__right'>
            <div className='prod__header'>
                <h3>HP LAPTOP: 12INCHES WITH 1TB AND 64BITS OS</h3>
                <h5>In Stock</h5>
            </div>
            <div className='prod__amount'>
                <h4>#100000</h4>
                <h5>#200000</h5>
            </div>
            <div className='prod__colors'>
                <h5>Color</h5>
                <div className='colors'>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='prod__size'>
                <h5>Size</h5>
                {/*implement dropdown here */}
                <button>Not Specified</button>
            </div>
            <div className='prod__menu'>
                <div>
                  <div className='prod__menuIcon'>
                    <Icon icon="ep:arrow-up" />
                    <Icon icon="ep:arrow-down" />
                  </div>
                  1
                </div>
                <button>
                  <Icon icon="ant-design:shopping-cart-outlined" />
                  Add to Cart
                </button>
                <div className='prod__menuWish'>
                  <Icon icon="icon-park-outline:like" />
                  WishList
                </div>
            </div>
            <div className='product__socialIcons'>
              <h4>Share This Product</h4>
              <div className='product__social'>
                <Icon icon="dashicons:facebook-alt" />
                <Icon icon="teenyicons:instagram-outline" />
                <Icon icon="brandico:twitter-bird" />
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default ProductInfo
