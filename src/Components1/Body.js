import React from 'react'
import './Body.css'

export default function Body() {
  return (
    <div className='main'>
      <div id='heading'>
        <h1>Lets Bring your team together </h1>
        <h1>in on Onclick</h1>
        <button className='btn'>Get Started</button>
      </div>
      <div className='image'>
       <img src="https://picsum.photos/id/946/400/250" height="480px" width="700px" alt="" />
      </div>
    </div>
  )
}
