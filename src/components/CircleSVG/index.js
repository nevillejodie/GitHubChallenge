import React from "react";
import css from "./CircleSVG.module.css";

function CircleSVG({ xPosition, yPosition, timeDelay }) {
  return (
    <svg
      className={css.container}
      width="100"
      height="100"
      style={{ left: xPosition, top: yPosition }}
    >
      <circle
        className={css.path}
        cx="50"
        cy="50"
        r="25"
        stroke="darkgrey"
        stroke-width="10"
        fill="transparent"
        style={{ animationDelay: timeDelay }}
      />
    </svg>
  );
}

export default CircleSVG;
