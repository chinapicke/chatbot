import React from 'react'

const QuizCard = ({question, answer, incrementIndex}) => {
  return (
    <div>
        <h1>{question}</h1>
        <p>{answer}</p>
        <button onClick={incrementIndex}>Next Question</button>
    </div>
  )
}

export default QuizCard