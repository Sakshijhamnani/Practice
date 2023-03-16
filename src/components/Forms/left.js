// import { useState } from "react";
import React from 'react'


export default function Left({count}) {
    let img1='Image1';
    // const [image,setImage]=useState(img1);
    let img2='Image2';
    let img3='Image3';
    let img4='Image4';
    
    let imges=[img1,img2,img3,img4];
   
  return (
    <div>
      <div className='first'>
        <p >{imges[count]}</p>
      </div>
    </div>
  )
}
