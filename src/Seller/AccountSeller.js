import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import "./AccountSeller.css"
import { Link } from 'react-router-dom'
import SavedItem from './SavedItem'

function AccountSeller() {
  return (
    <>
        <Navbar />
            <div className='accountSeller'>
                <h3>Account Information</h3>
                <div>
                    <Link>Account Management</Link>
                    <Link>Address Book</Link>
                </div>
                <div className='accountSeller__top'>

                </div>
                <div className='accountSeller__bottom'>

                </div>
            </div>
            <SavedItem />
       <Newsletter />
       <Footer />
    </>
    
  )
}

export default AccountSeller
