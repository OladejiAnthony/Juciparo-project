import React from 'react'

function AccountHeader(props) {
  return (
    <div className='account_head'>
        <img src={props.img} alt='logo' />
        <h3>{props.head}</h3>
        <h5>{props.headFive}</h5>
    </div>
  )
}

export default AccountHeader
