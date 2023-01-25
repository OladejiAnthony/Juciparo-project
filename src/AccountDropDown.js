import React from 'react'
import "./AccountDropDown.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
//import AccountLogin from './LoginPage/AccountLogin';

function AccountDropDown() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    

  return (
    <div className='dropdown_container'>
      <div onClick={handleOpen}>
        <Icon icon="teenyicons:user-outline" />
        <button >Account</button>
        {open ? 
          <div className='dropdown__list'>
              <Link to="/AccountLogin">Sign In</Link>
              <Link to="/CreateAccount">Create an account</Link>
              <Link>
                  <Icon icon="teenyicons:user-outline" />
                  Saved Items
              </Link>
          </div> 
          
          : 
          <div></div>
        }
      </div>
      
    </div>
  )
}

export default AccountDropDown
