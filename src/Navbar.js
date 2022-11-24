import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../src/Images/logoOne.jpg"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import AccountDropDown from './AccountDropDown';
import { SidebarData } from './Data/Data';


function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [selected, setSelected] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };



  return (
    <nav className='nav__container'>
      <div className={click ? "nav__contain active" : "nav__contain"}>
        <div className="nav__top">
          <Link to="/">
            <img src={logo} alt='logo' />
          </Link>
          <div className='nav__links'>
            <Link className='navLinkOne' to="/IntroPage">
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
          <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            Categories
          </button>
          {isHovering && (
            <div className='categoryBar'>
              {SidebarData.map((item, index) => {
                  return (
                    <>
                      <div className = {selected===index ? 'categoryItem active' : 'categoryItem'}
                        key={index}
                        onClick={()=>setSelected(index)}
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}
                      >
                        <Icon icon={item.icon} />
                        <Link to={item.heading}>{item.heading}
                        </Link>
            
                      </div>
                    </>
                  )
                }
              )}
            </div>
          )}

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
              <AccountDropDown />
            </Link>
            <Link to="/Cart">
              <Icon icon="ant-design:shopping-cart-outlined" />
              Cart
            </Link>
            <Link to="">
              <Icon icon="bx:help-circle" />
              Help
            </Link>
          </div>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
