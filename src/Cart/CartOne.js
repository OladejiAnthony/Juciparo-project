import { Icon } from '@iconify/react'
import React from 'react'
import imgB from "../Images/product2.jpg"
import "./CartOne.css"

function CartOne() {
  return (
    <div className='cartOne__container'>
      <h4>Cart (1)</h4>
      <div className='cartBox'>
        <div className='cart__left'>
          <img src={imgB} alt="products" />
          <h5>HP LAPTOP: 12INCHES WITH 1TB AND 64BITS OS </h5>
        </div>
        <div className='cart__right'>
          <div>
            <div className='cart__menuIcon'>
              <Icon icon="ep:arrow-up" />
              <Icon icon="ep:arrow-down" />
            </div>
            1
          </div>
          <h4>#100000</h4>
          <Icon icon="iconoir:cancel" />
        </div>

      </div>
    </div>
  )
}

export default CartOne