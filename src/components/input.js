import React from 'react';
import PropTypes from 'prop-types';

export default function Input(){
    return(
         
        <>
        <label>
         <input  className="input" name="myInput" value="mobile.."/>
      </label><br></br>
      
      <label>
         <input className="input" name="myInput" value="password.."  />
      </label><br />
      </>
    );
    
}