import React from 'react'
import "./Profile.css"
import ProfileHead from './ProfileHead'
import ProfileProducts from './ProfileProducts'
import ProfileSidebar from './ProfileSidebar'

function Profile() {
  return (
    <div className='profile__container'>
      <ProfileHead />
      <div className='profile__row'>
        <ProfileSidebar />
        <ProfileProducts />
      </div>
    </div>
  )
}

export default Profile
