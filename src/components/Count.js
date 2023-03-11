import React from 'react';
import {useState} from 'react';
import './count.css';

export default function Count(){
    const [count,setCount]=useState(0);

function IncreaseCount(){
    setCount(count+1);
}
function DecreaseCount(){
    setCount(count-1)
}

return(
    <>
    <h1 className='heading'>{count}</h1>
<button className='button1' onClick={IncreaseCount}>Increase Count</button>
<button className='button2' onClick={DecreaseCount}>Decrease Count</button>
</>
)
}



