import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import logo from "./Images/JuciAlternative.jpg"

function Footer() {
  return (
    <div className='footer__container'>
      <img src={logo} alt='logo' />
      <Link to="/">
        <Icon icon="ant-design:twitter-outlined" />
      </Link>
      <Link to="/"> 
        <Icon icon="ant-design:instagram-outlined" />
      </Link>
      <Link to="/">
        <Icon icon="ei:sc-facebook" />
      </Link>
      <div className='footer__list'>
        <ul>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
          <li>Track My Order</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Store</li>
          <li>Top Products</li>
          <li>Official Store</li>
          <li>Become a seller</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>About Us</li>
          <li>Customer service</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
        
    </div>
  )
}

export default Footer