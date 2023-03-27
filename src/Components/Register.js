import React from 'react'
import Styles from './Register.module.css'

export default function Register() {
  return (
    <div className={Styles.outerDiv}>
        <div className={Styles.innerDiv}>
        <i className='fa fa-envelope'></i>
        <input type="email" placeholder='Email' className={Styles.input}/><br/>
        <i className='fa fa-user'></i>
        <input type="text" placeholder='Username' className={Styles.input}/><br/>
        <i className='fa fa-key'></i>
        <input type="password" placeholder='Password' className={Styles.input}/><br/>
        <button>Register</button>

        </div>
       
      
    </div>
  )
}
