import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"
import { Questions } from '../Helpers/Questions'

function EndScreen() {
    const{score,setScore,setGameState}=useContext(QuizContext);
 const reStartQuiz=()=>{
    setScore(0);
    setGameState("menu")
 }


  return (
    <div className='endscreen'>
      <h1>Quiz Finished</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={reStartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
