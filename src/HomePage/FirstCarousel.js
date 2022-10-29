import React, { useEffect, useState } from 'react'
import "./FirstCarousel.css"
//import { firstCarousel } from '../util/Data'

const FirstCarousel = (props) => {
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
      <div className="carousel-container">
          <div className="carousel-wrapper">
            {
              currentIndex > 0 &&
              <button onClick={prev} className="left-arrow">
                &lt;
              </button>
            }
            <div 
              className="carousel-content-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children}
                </div>
            </div>
            {
              currentIndex < (length - 1) &&
              <button onClick={next} className="right-arrow">
                &gt;
              </button>
            }

        </div>
      </div>
  )
}

export default FirstCarousel;

/*

{firstCarousel.map((search) => {
        return(
          <div></div>
        )
      }

*/