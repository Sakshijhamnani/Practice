import React, { useState,useRef } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';

import './Quiz.css'
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    // const [score,setScore] = useState(0);
    const ref=useRef(0)

    const [ClickedOption,setClickedOption]=useState(0);
    

    
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
            // ClickedOption.current=0
            
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(ClickedOption===QuizData[currentQuestion].answer){
            // setScore(score+1);
            ref.current=ref.current+2;
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        
        // setScore(0);
        ref.current=0;
    }
    
   
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={ref.current} totalScore={(QuizData.length)*2}  tryAgain={resetAll}/>
                // {ref.current>6?<p>You passed the Test</p>:<p>You falied The test</p>}
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        
                        className={`option-btn ${
                            ClickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        
                       
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
            
        </div>
        
       
    </div>
  )
}

export default Quiz