import React from 'react'
import "./SellerNext.css"
import app from "../Images/aplliance.jpg"
import { Link } from 'react-router-dom'

function SellerNext() {
  return (
    <div className='sellerNext'>
      <div>
        <h3>Start Selling Today</h3>
        <Link to="/SellerCreate">Get Started</Link>
      </div>
      <img src={app} alt="add" />
    </div>
  )
}

export default SellerNext
