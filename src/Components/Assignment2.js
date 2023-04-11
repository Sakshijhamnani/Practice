import './Assignment.css'
import React from 'react'
import { useState } from 'react'



export default function Assignment2() {
    const [firstname,setFirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])
 function handleClick(){
    const user={
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    }
    setData([user,...data])
    setFirstname("")
    setlastname("")
    setEmail("")
    setPassword("")
 }
 function removeData(index){
    data.splice(index,1)
    setData([...data])
 }

  return (
    <div >
        <div className='Main'> 
      <div className='Form'>
      
       FirstName:<input type="text" name="" id="" value={firstname}  placeholder='Enter Firstname' onChange={(event=>setFirstname(event.target.value))} /><br/>
        
       LastName: <input type="text" name="" id="" value={lastname} placeholder='Enter LastName'  onChange={(event)=>setlastname(event.target.value)} /><br/>
        
       Email: <input type="email" name="" id="" value={email} placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)}  /><br/>
    
       Password: <input type="password" name="" id="" value={password} placeholder='Enter Password' onChange={(event)=>setPassword(event.target.value)}/><br/>
        <button onClick={handleClick}>Submit</button>

      </div>
       <div className='RightSide'>
        <p className='Details'>{firstname}</p>
        <p className='Details'>{lastname}</p>
        <p className='Details'>{email}</p>
        <p className='Details'>{password}</p>

       </div>
       </div>
       <div className='ViewData'>
      <table>
        <thead>
            <tr>
                <td>Firstname</td>
                <td>LastName</td>
                <td>Email</td>
                <td>Password</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((ele,index)=>(
                    <tr>
                        <td>{ele.firstname}</td>
                        <td>{ele.lastname}</td>
                        <td>{ele.email}</td>
                        <td>{ele.password}</td>
                        <td onClick={removeData}>❌</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      </div>
      
    </div>
  )
}
