import React from 'react'
import {useState} from 'react';
 

export default function Assignment3(){
    // "create an array with multiple greetings", "create a button and handle click on button ", "show the next greeting message on h1"

  const greetings=["Good Morning","Good Evening", "Good AfterNoon"]
  const [count,setCount]=useState(0)
  function handleClick(){
  if(count==greetings.length-1){
    setCount(0)
  }
  else{
   setCount(count+1)
  }
  }
  return(
  <>
  <h1>{greetings[count]}</h1>
  <button onClick={handleClick}>Click for Next Greeting</button>

  </>
  )
}