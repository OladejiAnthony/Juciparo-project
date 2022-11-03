import React from 'react'

function CreateHead(props) {
  return (
    <div className='create__head'>
        <img src={props.img} alt='logo' />
        <h3>{props.head}</h3>
        <h5>{props.headFive}</h5>
    </div>
  )
}

export default CreateHead
