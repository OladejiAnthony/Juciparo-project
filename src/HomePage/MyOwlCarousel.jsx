//import React, { Component } from 'react';
import React from 'react'
import "./MyOwlCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import bcg from "../Images/woman.png"

function IndividualIntervalsExample() {
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

