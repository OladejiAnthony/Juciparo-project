import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { SellingCarouselData } from "../Data/Data";
import "./SellingCarousel.css"
import right from "../Images/right.svg"
import left from "../Images/left.svg"
import { useState } from "react";
import { useEffect } from "react";


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

function SellingCarousel () {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      //setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/category/electronics?limit=5");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        //setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }

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
      <div className="selling-carousel-container">
        <div className="selling-carousel-wrapper">
          <div className='wrappers-text'>
            <h4>Most Selling Products</h4>
            <h5>See All</h5>
          </div>
          <Slider {...settings}>
            {filter.map((product) => {
              return (
                <div key={product.id}>
                  <button className=''>{product.btn}</button>
                  <div className="img">
                    <img src={product.image} alt="placeholder"  /> 
                  </div>
                  <div className='products-text'>
                    <Link to={"/productDetails/" + product.id} onClick={() => navigate(product.route)}>
                      {product.title.substring(0, 12)}...
                    </Link>
                    <div>
                        <h5>{product.price}</h5>
                        <p style={{ textDecoration: "line-through" }}>{product.price}</p>
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

export default SellingCarousel

