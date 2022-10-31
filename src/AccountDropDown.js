import React from 'react'
import "./AccountDropDown.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

function AccountDropDown() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

  return (
    <div className='dropdown_container'>
    <Icon icon="teenyicons:user-outline" />
      <button onClick={handleOpen}>Account</button>
      {open ? 
        <div className='dropdown__list'>
            <Link to="/">Sign In</Link>
            <Link>Create an account</Link>
            <Link>
                <Icon icon="teenyicons:user-outline" />
                Saved Items
            </Link>
        </div> 
        
        : 
        <div></div>
      }
    </div>
  )
}

export default AccountDropDown
