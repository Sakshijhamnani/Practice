import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './Assignment.css'

const url="https://jsonplaceholder.typicode.com/users"
export default function Assignment() {
const [user,setUsers]=useState([]);
    // const [isVisible, setIsVisible]=useState(JSON.parse(localStorage.getItem("table-visibility")))
   

    useEffect(()=>{
        axios.get(url).then((response)=>setUsers(response.data))
    },[])

    function removeUser(index){
        user.splice(index,1)
        setUsers([...user]);
    }
    
  return (
    <>
     <h3>UserApp</h3> 
     <table>
        <thead>
            <tr>
                <th>S No.</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((data,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td onClick={removeUser}>❌</td>
                    </tr>
                ))
            }
        </tbody>
     </table>
    </>
  )
}
