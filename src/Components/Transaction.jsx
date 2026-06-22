import React from 'react'

export default React.memo(function Transaction(props) {
  return (
    <div className='each-transaction'>
      <p>{props.description}</p>
      <p>$ {props.value}</p>
    </div>
  )
})
