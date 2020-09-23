import React from 'react';
import './Space.css';

function Space(props) {
  const index = props.index;
  const mark = props.mark;
  const borderStyle = getBorderStyle(index);

  return <div className="Space" style={borderStyle}> {mark}</div>;
}

function getBorderStyle(index) {
  let style = {}
  if (index / 3 < 2) {
    style = {
      ...style,
      borderBottom: '1px solid #d8dee9',
    }
  }
  if (index % 3 < 2) {
    style = {
      ...style,
      borderRight: '1px solid #d8dee9',
    }
  }
  return style;
}

export default Space;