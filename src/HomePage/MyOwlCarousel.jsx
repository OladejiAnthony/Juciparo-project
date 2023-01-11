//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react'
import "./MyOwlCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import bcg from "../Images/woman.png"
import axios from 'axios';

function IndividualIntervalsExample() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://admin.juciparo.com/api/v1/")
    .then(function(response) {
      console.log(response?.data?.data)
      setProducts(response?.data?.data)
    })
  };
  useEffect(() => {
    getProducts();
  }, []);





  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <Carousel.Caption>
          <h3>Shop Best Products</h3>
          <p>Experience buying of products at good rates</p>
          <button>Shop Now</button>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={bcg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Carousel.Caption>
          <h3>Shop Best Products</h3>
          <p>Experience buying of products at good rates</p>
          <button>Shop Now</button>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={bcg}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Shop Best Products</h3>
          <p>Experience buying of products at good rates</p>
          <button>Shop Now</button>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={bcg}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

