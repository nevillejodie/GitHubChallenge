import React, { useState } from "react";
import css from "./App.module.css";
import DiagramBoard from "../DiagramBoard";
import Input from "../Input";
import Question from "../Question";

function App() {
  const [answers, setAnswers] = useState([
    {
      solution: "git clone",
      correct: false,
    },
    {
      solution: "git checkout -b",
      correct: false,
    },

    { solution: "git add .", correct: false },

    { solution: 'git commit -m "your message"', correct: false },

    { solution: "git push", correct: false },
  ]);

  function checkAnswer(input) {
    const correctAnswerIndex = answers.findIndex(
      (answer) => input === answer.solution
    );

    if (correctAnswerIndex >= 0) {
      setAnswers([
        ...answers.slice(0, correctAnswerIndex),
        { ...answers[correctAnswerIndex], correct: true },
        ...answers.slice(correctAnswerIndex + 1),
      ]);
    }
  }

  return (
    <div className={css.App}>
      <DiagramBoard answers={answers} className={css.diagramBoard} />
      <Question className={css.question} />
      <Input className={css.input} checkAnswer={checkAnswer} />
    </div>
  );
}

export default App;
