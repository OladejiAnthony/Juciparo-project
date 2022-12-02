import React from 'react'

function TermsCard(props) {
  return (
    <div className='terms--card'>
      <h4>{props.head}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default TermsCard
