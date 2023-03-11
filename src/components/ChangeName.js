import React, { useState } from "react";
import './ChangeName.css'


export default function ChangeName(){
    const [Name,changeName] =useState("Amit")
    function Change(){
        if(Name==='Amit'){
            changeName('Rajan')
        }
        else{
            changeName('Amit')
        }
    }
    return(
        <>
         <h1 className="head">My name is {Name}</h1>
        <button className="Changebutton" onClick={Change}>Change Name</button>
        </>
    )
}