import React from 'react';
import css from './DiagramBoard.module.css';

import CircleSVG from '../CircleSVG';
import LineSVG from '../LineSVG';

const testData = [
  { component: CircleSVG, xPosition: '100px', yPosition: '100px' },
  { component: LineSVG, xPosition: '100px', yPosition: '320px' },
];

function DiagramBoard({ answers }) {
  return (
    <section className={css.DiagramBoard}>
      {answers[0].correct && (
        <section>
          {testData.map(({ component: Component, ...props }) => (
            <Component {...props} />
          ))}
        </section>
      )}
    </section>
  );
}

export default DiagramBoard;
