import React from "react";
import css from "./DiagramBoard.module.css";

import CircleSVG from "../CircleSVG";
import LineSVG from "../LineSVG";

// const testData = [
//   { component: CircleSVG, xPosition: "100px", yPosition: "100px" },
//   { component: LineSVG, xPosition: "100px", yPosition: "320px" },
// ];

const gitClone = [
  { component: CircleSVG, xPosition: "100px", yPosition: "100px" },
  {
    component: LineSVG,
    xPosition: "25px",
    yPosition: "175px",
    timeDelay: "2s",
  },
];

const gitCheckout = [
  {
    component: CircleSVG,
    xPosition: "100px",
    yPosition: "100px",
    timeDelay: "0s",
  },
  {
    component: LineSVG,
    xPosition: "25px",
    yPosition: "175px",
    timeDelay: "2s",
  },

  {
    component: CircleSVG,
    xPosition: "100px",
    yPosition: "450px",
    timeDelay: "3s",
  },
];

function DiagramBoard({ answers }) {
  return (
    <section className={css.DiagramBoard}>
      {answers[0].correct && (
        <section>
          {gitClone.map(({ component: Component, ...props }) => (
            <Component {...props} />
          ))}
        </section>
      )}
      {answers[1].correct && (
        <section>
          {gitCheckout.map(({ component: Component, ...props }) => (
            <Component {...props} />
          ))}
        </section>
      )}
    </section>
  );
}

export default DiagramBoard;
