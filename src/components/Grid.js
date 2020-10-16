import React from 'react';
import './Grid.css';
import Space from './Space';

function Grid(props) {
  const spaces = props.spaces;
  const winners = props.winners;
  const enabled = props.enabled;

  const elements = spaces.map((mark, index) => <Space key={index} index={index} mark={mark} winner={winners[index]} enabled={enabled} />);
  return (
    <main className="Grid">
      {elements}
    </main>
  );
}

export default Grid;