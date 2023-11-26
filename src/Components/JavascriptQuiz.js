import { useState } from "react"
import QuizCard from "./QuizCard"

const JavascriptQuiz = (props) => {
    console.log(props)
    const[quizIndex, setQuizIndex]= useState(0)

    const incrementIndex=()=>{
        setQuizIndex((prevIndex)=>prevIndex += 1)
    }


    
    const currentQuestion = props.questions[quizIndex]

    if (!currentQuestion){
        return(
            <h1>Quiz has finised!</h1>
        )
    }
  return (
    <div>
        <QuizCard question={currentQuestion.question} answer={currentQuestion.answer} answerOptions={currentQuestion.answerOptions} incrementIndex={incrementIndex}  />
    </div>
  )
}

export default JavascriptQuiz