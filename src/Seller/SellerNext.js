import React, { useEffect, useState } from 'react'
import "./SellerNext.css"
//import { firstCarousel } from '../util/Data'

const SellerNext = (props) => {
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
      <div className="seller-carousel-container">
          <div className="seller-carousel-wrapper">
            <div className='seller-wrapper-text'>
                <h4>75 Products Found</h4>
                <h5>Sort By : Size</h5>
            </div>
            
            <div 
              className="seller-carousel-content-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
                <div
                    className="seller-carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children}
                </div>
            </div>
            

        </div>
      </div>
  )
}

export default SellerNext;
