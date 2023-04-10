import React from 'react'
import { useState } from 'react';
import './Assignment2.css'

export default function Assignment2() {
    /*
"2": [
    "create a h1",
    "create a h2",
    "create a div",
    "manage state to track that when user mouse overed on the h1 and when mouse out with date and time",
    "create a html table to show the logs.",
    [
      { "time": "", "eventName": "out or in" },
      { "time": "", "eventName": "out or in" }
    ]
  ],

*/
  // const [isover,setIsover]=useState(false);
  const [data, setData] = useState([]);

  const handelmouseoverh1 = () => {
    const date = new Date();
    const time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    // setIsover(true);
    setData([
      ...data,
      {
        
        time: time,
        eventName: 'in',
        tag: 'h1',
      },
    ]);
  };

  const handlemouseOut = () => {
    const date = new Date();
    const time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // setIsover(false)
    setData([
      ...data,
      {
        
        time: time,
        eventName: 'out',
        tag: 'h1',
      },
    ]);
  };

  //h2 function  ....

  const handelmouseoverh2 = () => {
    const date = new Date();
    const time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    // setIsover(true);
    setData([
      ...data,
      {
        
        time: time,
        eventName: 'in',
        tag: 'h2',
      },
    ]);
  };

  const handlemouseOut2 = () => {
    const date = new Date();
    const time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // setIsover(false);
    setData([
      ...data,
      {
        
        time: time,
        eventName: 'out',
        tag: 'h2',
      },
    ]);
  };

  console.log(data);
  return (
    <div>
      <h1 onMouseOverCapture={handelmouseoverh1} onMouseLeave={handlemouseOut}>
        I am H1!
      </h1>
      <h2 onMouseOverCapture={handelmouseoverh2} onMouseLeave={handlemouseOut2}>
        I am H2!
      </h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>time </th>
              
              <th>Event Name</th>
              <th>Tag</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              return (
                <tr>
                  <td>{ele.time}</td>
                
                  <td>{ele.eventName}</td>
                  <td>{ele.tag}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
