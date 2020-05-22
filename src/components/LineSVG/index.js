import React from 'react';
import css from './lineSVG.module.css';

function LineSVG({ xPosition, yPosition }) {
  return (
    <svg
      className={css.container}
      width='250'
      height='500'
      style={{ left: xPosition, top: yPosition }}
    >
      <line
        className={css.linePath}
        x1='125'
        y1='0'
        x2='125'
        y2='500'
        stroke='darkgrey'
        stroke-width='20'
        fill='transparent'
      />
    </svg>
  );
}

export default LineSVG;
