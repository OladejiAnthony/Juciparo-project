import React, { useEffect, useState } from 'react'
import "./ProductCarousel.css"
//import { firstCarousel } from '../util/Data'

const ProductCarousel = (props) => {
  const {children, show} = props;
  // ...
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  const [touchPosition, setTouchPosition] = useState(null)
  // ...
  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        next()
    }

    if (diff < -5) {
        prev()
    }

    setTouchPosition(null)
  }

  // Set the length to match current children from props
  useEffect(() => {
      setLength(children.length)
  }, [children])
  

  // ...
  const next = () => {
    if (currentIndex < (length - show)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }
  // ...


  return (
      <div className="product-carousel-container">
          <div className="product-carousel-wrapper">
            <div className='wrapper-text'>
                <h4>Top Selling Products</h4>
                <h5>See All</h5>
            </div>
            {
              currentIndex > 0 &&
              <button onClick={prev} className="product-left-arrow">
                &lt;
              </button>
            }
            <div 
              className="product-carousel-content-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
                <div
                    className={`product-carousel-content div-${show}`}
                    style={{ transform: `translateX(-${currentIndex * 100 / show }%)` }}
                >
                    {children}
                </div>
            </div>
            {
              currentIndex < (length - show) &&
              <button onClick={next} className="product-right-arrow">
                &gt;
              </button>
            }

        </div>
      </div>
  )
}

export default ProductCarousel;
