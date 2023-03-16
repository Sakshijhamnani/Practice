import React from 'react'

export default function Right(props) {
  return (
    <div>
      <div className='second'>
        <button className='changeclick'  onClick={props.handleOnClick}>Change Pic</button>
        </div>
    </div>
  )
}

