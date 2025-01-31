import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"
function MainMenu() {
    const{gameState,setGameState}=useContext(QuizContext)
  return (
    <div className='Menu'>
      <button className="next_btn" onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
