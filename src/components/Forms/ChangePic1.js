import React, { useState } from 'react'
import './ChangePic.css';

export default function ChangePic1() {
    let img1='https://picsum.photos/1920/1080?random'
    let img2='https://picsum.photos/id/645/400/250'
    let img3='https://picsum.photos/id/946/400/250'
    let img4='https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp'
    let Arr=[img1,img2,img3,img4]
    const [count,setCount]=useState(0);

    function handleOnClick(){
        if(count>=Arr.length-1){
            setCount(0)
        }
        else{
            setCount(count+1)
        }
    }

  return (
    <div className='outer'>
      <div className='first'>
       <img src={Arr[count]} height='400px' width="739px" alt="" />
      </div>
      <div className='second'>
       <button className='changeclick' onClick={handleOnClick}>Change Pic</button>
      </div>
    </div>
  )
}
