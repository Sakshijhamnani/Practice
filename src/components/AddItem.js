import { useState } from "react";
import React  from "react";
import './AddItem.css'
  
  export default function AddItem() {

    const [data,setdata]=useState([]);
    const [todo,setodo] =useState("");
  
    function HandleOnClick(){
      setdata([...data , todo])
      setodo("");
    }
    function Target(e){
      setodo(e.target.value)
  
    }
   
     
     return (
        <div>
      <input className="InputTag" value={todo} onChange={Target} type="text" />
      <button className="AddButton"onClick={HandleOnClick}>add</button>
    
    {data.map((element)=>{
      return <p>{element}</p>;
   })}
    </div>
       
     );
   
   }
   