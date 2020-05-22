import React from 'react';
import css from './CircleSVG.module.css';

function CircleSVG({ xPosition, yPosition }) {
  return (
    <svg
      className={css.container}
      width='250'
      height='250'
      style={{ left: xPosition, top: yPosition }}
    >
      <circle
        className={css.path}
        cx='125'
        cy='125'
        r='100'
        stroke='darkgrey'
        stroke-width='20'
        fill='transparent'
      />
    </svg>
  );
}

export default CircleSVG;
