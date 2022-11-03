//import React, { Component } from 'react';
import React from 'react'
import Slider from 'infinite-react-carousel';
import "./MyOwlCarousel.css"

const settings =  {
  arrows: false,
  arrowsBlock: false,
  autoplay: true,
  dots: true
};

function MyOwlCarousel() {
  return (
    <div className='carousel__container'>
        <Slider { ...settings }>
          <div>
            <h3>Shop Best Products</h3>
            <p>Experience buying of products at good rates</p>
            <button>Shop Now</button>
          </div>
          <div>
            <h3>Shop Best Products</h3>
            <p>Experience buying of products at good rates</p>
            <button>Shop Now</button>
          </div>
          <div>
            <h3>Shop Best Products</h3>
              <p>Experience buying of products at good rates</p>
              <button>Shop Now</button>
            </div>
        </Slider>
    </div>
  )
}

export default MyOwlCarousel

