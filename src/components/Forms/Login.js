import React from 'react'
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';




import './Login.css';
export default function Login() {
  return (
    
    
    <div className='login-page'>
      
      
        <h1 className='Welcome'>Welcome!</h1>
        <p className='down-heading'>Log in your account</p>
        <label className='Email' name="email" >Email</label><br></br>
        <input className='input' type="email" name='email' placeholder='Enter Email' required /><br></br>
        <label className='Email' name="Password">Password</label><br></br>
        <input  className='input-ps' type="password" name="password" placeholder='Enter Password' /><br></br>
        <input className='checkbox' type="checkbox"  /><span className='remember-me'>Remember me</span>
        <span className='forget-password'>forget password ?</span><br></br>
        <button className='button'>Log in</button><br></br>
        
        <a href='' className='Google'><FcGoogle/>Continue with Google</a>
        <a href='' className='Facebook'><FaFacebook/>Continue with facebook</a>
       
      </div>
      
  )
}
