import React from 'react';
import { connect } from 'react-redux';
import './Space.css';
import * as marks from '../game/marks';
import * as actions from '../store/actions';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';
import BugReportIcon from '@material-ui/icons/BugReport';

export const TEST_ID = "Space"

function Space(props) {
  const index = props.index;
  const mark = props.mark;
  const icon = getIcon(mark);
  const borderStyle = getBorderStyle(index);

  return <div className="Space" data-testid={TEST_ID} style={borderStyle} onClick={() => props.dispatch(index)}>{icon}</div>;
}

function getIcon(mark) {
  switch (mark) {
    case marks.EMPTY:
      return <span data-testid={marks.EMPTY} >&nbsp;</span>;
    case marks.X:
      return <span data-testid={marks.X} ><CloseIcon fontSize="inherit" /></span>;
    case marks.O:
      return <span data-testid={marks.O} ><RadioButtonUncheckedIcon fontSize="inherit" /></span>;
    default:
      return <BugReportIcon fontSize="inherit" />;
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