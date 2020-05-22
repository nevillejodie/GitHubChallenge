import React, { useState } from 'react';
import css from './App.module.css';
import DiagramBoard from '../DiagramBoard';
import Input from '../Input';

function App() {
  const [answers, setAnswers] = useState([
    {
      solution: 'git clone',
      correct: false,
    },
    {
      solution: 'git checkout -b',
      correct: false,
    },
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
      <DiagramBoard answers={answers} />
      <Input className={css.input} checkAnswer={checkAnswer} />
    </div>
  );
}

export default App;
