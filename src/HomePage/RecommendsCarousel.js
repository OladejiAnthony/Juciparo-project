import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { RecomCarouselData } from "../Data/Data";
import "./RecommendsCarousel.css"
import right from "../Images/right.svg"
import left from "../Images/left.svg"


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={right} alt="right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={left} alt="left" />
    </div>
    
  );
}

function RecommendsCarousel () {
  const navigate = useNavigate();
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite : true
          }
        }
      ]
    };
    return (
      <div className="recommends-carousel-container">
        <div className="recommends-carousel-wrapper">
          <div className='wrappers-text'>
            <h4>Recommended For You</h4>
            <h5>See All</h5>
          </div>
          <Slider {...settings}>

          {RecomCarouselData.map((product) => {
            return (
              <div key={product.id}>
                <button className=''>{product.btn}</button>
                <div className="img">
                  <img src={product.img} alt="placeholder"  /> 
                </div>
                <div className='recommends-text'>
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
         
          </Slider>
        </div>
      </div>
    );
  
}

export default RecommendsCarousel

