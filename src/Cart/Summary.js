import React from 'react'
import { Link } from 'react-router-dom'
import "./Summary.css"

function Summary(props) {
  return (
    <div className='cartSummary'>
      <div>
        <h4>{props.head}</h4>
        <div className='cartSummary__row'>
          <div>
            <h5>{props.subTotal} :</h5>
            <h4>#{props.price}</h4>
          </div>
          <div>
             <h5>{props.delivery} :</h5>
             <h5>{props.status}</h5>
          </div>
        </div>
      </div>
      <Link to="/CheckoutOne">
        Checkout
      </Link>
    </div>
  )
}

export default Summary

