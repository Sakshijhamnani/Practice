import React, { useState } from "react";
import myStyle from './GuessTheNumber.module.css'

// generate random number
let randomNumber = Math.round(Math.random() * 10);

const GuessTheNumber = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");
  const [count,setCount]=useState(0)

  function handleOnChange(event){
   setValue(event.target.value);
   
  }

  const onClick = () => {
    // setCount(count+1);
    const userGuess = parseInt(value, setValue); // convert string to integer

    // If the user clicks 'Guess' without entering a number, ask them to pick a number
    setResults(<p >Pick a number</p>);

    // If user input matches randomNumber, user guess is Correct!
    if (userGuess === randomNumber)
      setResults(<p >Congatulations! you guessed the right number in {count+1} attempts</p>);
    // If user input is higher than randomNumber, user guess is 'Too high'
    if (userGuess > randomNumber)
      setResults(<p >Too high, guess again</p>);

    // If user input is lower than randomNumber, user guess is 'Too low'
    if (userGuess < randomNumber)
      setResults(<p className="alert alert-warning">Too low, guess again</p>);

    setCount(count+1)
  };

  return (
    <>
      <div className={myStyle.outer}>
      <div className={myStyle.main}>
      <h2>Guess The Number game</h2>
      <p className="lead">Guess a number between 1 and 10.</p>
      <input
        value={value}
        type="number"
        // onChange={e => setValue(e.target.value)}
        onChange={handleOnChange}
      /><br/>
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
      <br />
      <br />
      {results}
      

      </div>
      </div>
      
    </>
  );
};

export default GuessTheNumber;
