import React from 'react'

export default function Register() {
  return (
    <div className='Registration-page'>
      <form>
        <h1>Registration</h1>
        <label name="firstname">Firstname</label><br></br>
        <input className='input' type="text"  name="firstname" placeholder='Enter Firstname'/><br />
        <label name="lastname">lastname</label><br />
        <input className='input' type="text"  name="lastname" placeholder='Enter Lastname'/><br />
        <label name="email">Email</label><br />
        <input className='input' type="email"  name="email" placeholder='Enter Email'/><br />
        <label name="password">Password</label><br />
        <input className='input' type="password"  name="password"placeholder='Enter password'/><br />
        <button className='button'>Submit</button>

      </form>
    </div>
  )
}
