import { useState } from "react";
import { QUESTIONS } from "../questions/Question";
const Quiz = () => {
  const [userAnswers, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <p>हाल सक्रिय प्रश्नहरू</p>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Quiz;
