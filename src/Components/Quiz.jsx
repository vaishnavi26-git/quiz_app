import React, { useState } from "react";
import { Questions } from "../Helpers/Questions";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  const { score, setScore,setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("A");


// const checkAns=(e,answer)=>{
//     if(Questions[currQuestion].asnwer=== answer){
// e.target.classList.add("correct")
//     }else{
//         e.target.classList.add("wrong")

//     }
// }
  const nextQuestion = () => {
    if (Questions[currQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    //   console.log("hi")
    }
    setCurrQuestion(currQuestion + 1);
  };



  const finishQuiz=()=>{
    if (Questions[currQuestion].asnwer == optionChosen) {
        setScore(score + 1);
      }
  setGameState("endScreen")
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      {/* <hr/> */}
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button className="next_btn" onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button className="next_btn" onClick={nextQuestion}>Next </button>
      )}
      {/* <div className="index">{currQuestion+1} of {Questions.length} questions</div> */}
    </div>
  );
}

export default Quiz;
