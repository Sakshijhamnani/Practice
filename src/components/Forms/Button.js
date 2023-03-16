import React from 'react'
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Button() {
  const[value,setValue]=useState(true)

  function handleClick(){
    setValue(!value);
  }
  return (
    <div>
      {value ? <Register/>: " "}
      {!value ? <Login /> : " "}
      { value ?  <button className='Buttons Buttons1'> SignUp</button> :<button className="Buttons Buttons1" onClick={handleClick}> SignUp</button> }
      { value? <button className='Buttons ' onClick={handleClick}>  Login</button> :<button className='Buttons Buttons' >  Login</button> }
    </div>
  )
}
