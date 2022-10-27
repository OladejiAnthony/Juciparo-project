import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "./Images/footer_Logo.jpg"

function Footer() {
  return (
    <div className='footer__container'>
      <img src={logo} alt='logo' />
        
    </div>
  )
}

export default Footer
