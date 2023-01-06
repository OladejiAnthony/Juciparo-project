import React, {useState} from 'react'
import "./Navbar.css"
import { useSelector } from "react-redux";
import logo from "../src/Images/logoOne.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import AccountDropDown from './AccountDropDown';
import { SidebarData } from './Data/Data';
import axios from 'axios';
import { useEffect } from 'react';


function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = () => setClick(!click);
  const [showDiv, setShowDiv] = useState(false);
  const onClick = () => setShowDiv(!showDiv);
  const state = useSelector(state => state.handleCart)
  const navigate = useNavigate();
  
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  const getProducts = async () => {
    //setLoading(true);
   
    const response = await axios.get("https://admin.juciparo.com/api/v1/categories")
    .then(function(response) {
      console.log(response?.data?.data);
      setData(response?.data?.data)
    })
    
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='sticky__nav'>

    <nav className={click ? "nav__container active " : "nav__container"}>
      <div className='nav__contain' >
        <div className="nav__top">
          <Link to="/">
            <img src={logo} alt='logo' />
          </Link>
          <div className='nav__links'>
            <Link className='navLinkOne' to="/IntroPage">
                Sell An Item
            </Link>
            <Link className='navLinkTwo' to="/AboutUs">
                About Us
            </Link>
          </div>
          
          <Link className='nav__notification'>
            <Icon icon="clarity:notification-line" />
            Notification
          </Link>
        </div>
        <div className='nav__bottom'>
          <button onClick={onClick}>
            Categories
          </button>
          {
            showDiv ?
              <div className='categoryBar'>
                {data?.map((item, index) => {
                    return (
                      <>
                        <div className = {index ? 'categoryItem active' : 'categoryItem'}
                          key={index}
                        >
                          <Icon icon={item.icon} />
                          <p onClick={() => navigate(`/testPage/${item.slug}`)}>
                            {item.title}
                          </p>
              
                        </div>
                      </>
                    )
                  }
                )}
              </div>
            
             : null 
          }

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
              <p>
                {state.length}
              </p>
              Cart
            </Link>
            <Link to="/Help">
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
    </div>
  )
}

export default Navbar


