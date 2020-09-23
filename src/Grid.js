import React from 'react';
import './Grid.css'

function Grid(props) {
  const spaces = props.spaces;
  const elements = spaces.map((space, index) => <div key={index}>{space}</div>);
  return (
    <main className="Grid">
      {elements}
    </main>
  );
}

export default Grid;