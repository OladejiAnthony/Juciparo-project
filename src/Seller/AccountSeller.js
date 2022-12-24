import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import "./AccountSeller.css"
import { Link } from 'react-router-dom'
import SavedItem from './SavedItem'
import AccountTab from './AccountTab'
import AccountTabOne from './AccountTabOne'

function AccountSeller() {
  return (
    <>
        <Navbar />
            <div className='accountSeller'>
                <h3>Account Information</h3>
                <div className='head'>
                    <Link>Account Management</Link>
                    <Link>Address Book</Link>
                </div>
                <div className='accountSeller__top'>
                    <div className='left'>
                        <Link>Account Details</Link>
                        <h5>Olaniyi Abiodun</h5>
                        <h5>abiodunolaniyi7@gmail.com</h5>
                    </div>
                    <div className='right'>
                        <Link>Address Book</Link>
                        <h5>Your default shipping aaddress</h5>
                        <h5>Okelerin primary school, Enugu, Enugu state 08037525369</h5>
                    </div>
                </div>
                <AccountTab />
                <AccountTabOne />
                <div className='pend'>
                    <h4>Pending Review</h4>
                </div>
            </div>
            <SavedItem />
       <Newsletter />
       <Footer />
    </>
    
  )
}

export default AccountSeller



