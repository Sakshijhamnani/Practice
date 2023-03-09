import React from 'react';
// import './components/module.css';
import './module.css';

export default function Card(props){
    
    return(
        <>
        <div className='bigdiv'>
        <div className='divv'>
        
          <div className='smalldiv'>
            
          <img src={props.link} height="49px" width="49px" />
          </div>
          <h6>{props.designation}</h6>
          <span><b>{props.name}</b></span>
          <p> {props.description}</p>

        </div>
        </div>
</>
    )
}