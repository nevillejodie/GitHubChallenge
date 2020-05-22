import React, { useState } from 'react';
import css from './input.module.css';

function Input({ checkAnswer }) {
  const [input, setInput] = useState('');

  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <input
        className={css.input}
        type='text'
        placeholder='Type Your Answer'
        onChange={handleInput}
        value={input}
      ></input>
      <button className={css.enterButton} onClick={() => checkAnswer(input)}>
        Enter
      </button>
    </>
  );
}

export default Input;
