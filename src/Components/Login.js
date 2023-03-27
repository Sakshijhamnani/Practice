import React from 'react'
import { FaBeer } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

import Styles from './Login.module.css'

export default function Login() {
  return (
    
    <div className={Styles.outerDiv}>
      <div className={Styles.innerDiv}>
        <div><i className='fa fa-user' ></i>
        <input placeholder='Username' className={Styles.inputTag1} type="text" /></div>
        <br/>
        <div>
        <i className='fa fa-key'></i>
        <input placeholder='password' type="password"/><br/>
        </div>
        <button>Login</button>
        
       <p>Dont have an account ?<NavLink to="/Register">
          <span className="li">Register</span>
        </NavLink></p> 
        
       </div>
      
      
      
    </div>
  )
}
