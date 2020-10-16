import React from 'react';
import { connect } from 'react-redux';
import './Space.css';
import X from './marks/X';
import O from './marks/O';
import _ from './marks/_';
import * as marks from '../game/marks';
import * as actions from '../store/actions';

export const TEST_ID = "Space";

function Space(props) {
  const index = props.index;
  const mark = props.mark;
  const enabled = props.enabled;
  const display = displayMark(mark);
  const borderStyle = getBorderStyle(index);

  const onClick = () => {
    if (enabled && mark === marks._) {
      props.dispatch(index)
    }
  }

  return <div className="Space" data-testid={TEST_ID} style={borderStyle} onClick={onClick}>{display}</div>;
}

function displayMark(mark) {
  switch (mark) {
    case marks._:
      return <_ />;
    case marks.X:
      return <X />;
    case marks.O:
      return <O />;
    default:
      console.error(`Unknown mark: ${mark}`);
      return <span>~</span>;
  }
}

function getBorderStyle(index) {
  let style = {}
  if (index / 3 >= 2) {
    style = {
      ...style,
      borderBottom: 'none',
    }
  }
  if (index % 3 == 2) {
    style = {
      ...style,
      borderRight: 'none',
    }
  }
  return style;
}

const actionCreators = {
  dispatch: actions.mark,
}

export default connect(null, actionCreators)(Space);