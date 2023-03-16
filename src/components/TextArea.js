
import React, { useState } from 'react'
import './TextArea.css';

export default function TextArea() {
    const [value,setValue]=useState('');
    const handleChange =(event)=>{
        const isvalue= value.length<=100
        if(isvalue){
            setValue(event.target.value);
        }
       
    }
         
    
  return (
    <>
    <h1 className='heading'>Text Area</h1>
    <label>
   
    <textarea className='textarea' maxLength={100}
      name="textarea"
      placeholder='Enter Text Here...'
      rows={10}
      cols={150}
      value={value}
      onChange={handleChange}
    />
  </label>
  <p className='bottom'>Max 100 Character</p>
  </>
  )
}
