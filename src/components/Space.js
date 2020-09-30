import React from 'react';
import { connect } from 'react-redux';
import './Space.css';
import * as marks from '../game/marks';
import * as actions from '../store/actions';

export const TEST_ID = "Space";
export const TEST_ID__ = "_";
export const TEST_ID_X = "X";
export const TEST_ID_O = "O";

function Space(props) {
  const index = props.index;
  const mark = props.mark;
  const display = displayMark(mark);
  const borderStyle = getBorderStyle(index);

  return <div className="Space" data-testid={TEST_ID} style={borderStyle} onClick={() => props.dispatch(index)}>{display}</div>;
}

function displayMark(mark) {
  switch (mark) {
    case marks._:
      return <span data-testid={TEST_ID__}>&nbsp;</span>;
    case marks.X:
      return <span data-testid={TEST_ID_X}>X</span>;
    case marks.O:
      return <span data-testid={TEST_ID_O}>O</span>;
    default:
      console.error(`Unknown mark: ${mark}`);
      return <span>~</span>;
  }
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

const actionCreators = {
  dispatch: actions.mark,
}

export default connect(null, actionCreators)(Space);