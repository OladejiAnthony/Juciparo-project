import React, {useState} from 'react'
import "./Navbar.css"
import logo from "./Images/Logo.jpg"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <nav className='nav__container'>
      <div className='nav__top'>
        <img src={logo} alt='logo' />
        <div className='nav__links'>
          <Link className='navLinkOne' to="">
              Sell An Item
          </Link>
          <Link className='navLinkTwo' to="AboutUs">
              About Us
          </Link>
        </div>
        
        <Link className='nav__notification' to="">
          <Icon icon="clarity:notification-line" />
          Notification
        </Link>
      </div>
      <div className='nav__bottom'>
        <button>
          Categories
        </button>
        <div className='nav__input'>
          <input
              type="text"
              placeholder="Search for anything"
              onChange={handleChange}
              value={searchInput} 
          />
          <button className='nav__search'>
            <Icon icon="ion:search-outline" />
          </button>
        </div>
        <div className='nav__bottom__list'>
          <Link to="">
            <Icon icon="teenyicons:user-outline" />
            Account
          </Link>
          <Link to="">
            <Icon icon="ant-design:shopping-cart-outlined" />
            Cart
          </Link>
          <Link to="">
            <Icon icon="bx:help-circle" />
            Help
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar