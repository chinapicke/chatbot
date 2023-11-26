import React from 'react'
import { useState } from 'react'

const QuizCard = ({question, answer, incrementIndex, answerOptions}) => {
  const handleCorrect= (isCorrect)=>{
    isCorrect === true ? 
    setCorrectAnswer(true): setCorrectAnswer(false)
    }

    const[correctAnswer, setCorrectAnswer] = useState(false)

  return (
    <div>
        <h1>{question}</h1>
        {answerOptions.map((option)=>{
          return(
            <div>

            <button onClick={()=>handleCorrect(option.isCorrect)}>
            <h1>{option.letter}</h1>
            <h1>{option.text}</h1>
            </button>
            </div>
          )
        })}
        {correctAnswer ?
        <h1>Correct</h1>: null
}
        {/* <p>{answer}</p> */}
        <button onClick={()=>{incrementIndex(); setCorrectAnswer(false)}}>Next Question</button>
    </div>
  )
}

export default QuizCard