import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./DeliveryMethod.css"

export default function DeliveryMethod() {
  return (
    <div className='delivery__container'>
      <h4>How do you want your order to be delivered? </h4>
      <div className='haed'>
        <div>
          <Icon />
          Door Step Delivery
        </div>
        <p>Delivered between Friday 11 Nov and Tuesday 15 Nov for<span> ₦ 4,970</span></p>
      </div>
      <div className='center'>
          asd
      </div>
      <Link>Save & Continue</Link>
    </div>
  )
}



