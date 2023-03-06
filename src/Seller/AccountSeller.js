import React,{useEffect} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import "./AccountSeller.css"
import { Link } from 'react-router-dom'
import SavedItem from './SavedItem'
import AccountTab from './AccountTab'
import AccountTabOne from './AccountTabOne'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function AccountSeller() {
    const { user: currentUser } = useSelector((state) => state.auth);
    // const {user: savedUser} = window.localStorage.getItem('userInfo')
    const { user, status, authorisation } = currentUser;
    useEffect(() => {
        if (authorisation.access_token) {
            localStorage.setItem('token', authorisation.access_token);
        }
    }, [])
    //firstname, lastname, email, phone, password
    
    // console.log(authorisation.access_token);
    // console.log(user);
    // console.log(currentUser);
    if (!currentUser) {
       return <Navigate to="/AccountLogin" />;
   }
    
  return (
    <>
        <Navbar />
        <div className='accountSeller'>
            <h3>Account Information</h3>
            <div className='head'>
                <Link to="/AccountManagement">Account Management</Link>
                <Link to="/AddressBook">Address Book</Link>
            </div>
            <div className='accountSeller__top'>
                <div className='left'>
                    <Link>Account Details</Link>
                    <h5>{ user?.name ? user?.name : "No name" }</h5> 
                    <h5>{user?.email ? user?.email : "No email"}</h5>  
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


// This page gets current User from Local Storage by getting user in 
// the application state and show user information (with token).



