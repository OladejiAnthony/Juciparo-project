//import React, { Component } from 'react';
import React from 'react'
import "./MyOwlCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
//import bcg from "../Images/bcg.jpg"

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Carousel.Caption>
          <h3>Shop Best Products</h3>
          <p>Experience buying of products at good rates</p>
          <button>Shop Now</button>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Carousel.Caption>
          <h3>Shop Best Products</h3>
          <p>Experience buying of products at good rates</p>
          <button>Shop Now</button>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src=""
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
          src=""
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

