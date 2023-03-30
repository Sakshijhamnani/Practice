import React from 'react'

export default function QuizResult(props) {
  return (
    <>
    <div>
      Your Score : {props.score} <br/>
      Total score : {props.totalScore} <br/>
     
    </div>
    <button id="next-button"  onClick={props.tryAgain}>Try again</button>
    </>
  )
}
