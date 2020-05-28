import React from "react";
import css from "./Question.module.css";

function Question() {
  return (
    <section className={css.question}>
      <h4>
        1) I want to copy an existing project from GitHub on to my laptop (local
        computer). What command do I need to type in to the Terminal on my code
        editor?
      </h4>
      <h5>Hint: git branch / git clone / git stash</h5>
    </section>
  );
}

export default Question;
