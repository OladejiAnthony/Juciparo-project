import React, { useEffect, useState } from 'react'
import "./SellingCarousel.css"
//import { firstCarousel } from '../util/Data'

const SellingCarousel = (props) => {
  const {children} = props;
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
    if (currentIndex < (length - 1)) {
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
      <div className="selling-carousel-container">
          <div className="selling-carousel-wrapper">
            <div className='wrapper-text'>
                <h4>Most Selling Products</h4>
                <h5>See All</h5>
            </div>
            {
              currentIndex > 0 &&
              <button onClick={prev} className="selling-left-arrow">
                &lt;
              </button>
            }
            <div 
              className="selling-carousel-content-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
                <div
                    className="selling-carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children}
                </div>
            </div>
            {
              currentIndex < (length - 1) &&
              <button onClick={next} className="selling-right-arrow">
                &gt;
              </button>
            }

        </div>
      </div>
  )
}

export default SellingCarousel;
