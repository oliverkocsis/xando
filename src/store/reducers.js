import * as actions from './actionTypes';
import * as marks from '../game/marks';
import { fromJS } from 'immutable';

const STATE_MARKS = 'marks';
const STATE_MARK = 'mark';

export const initialState = {
  mark: marks.X,
  marks: new Array(9).fill(marks._),
}

export function reducer(state = initialState, action) {
  console.debug(state);
  console.debug(action);
  const immutableState = fromJS(state);
  let newState;
  switch (action?.type) {
    case actions.MARK:
      newState = reduceMark(immutableState, action);
      break;
    default:
      newState = immutableState;
      break;
  }
  const newStateObject = newState.toJS();
  console.debug(newStateObject);
  return newStateObject;
}

function reduceMark(state, action) {
  const index = action.index;
  const mark = state.get(STATE_MARK);
  let marks = state.get(STATE_MARKS);
  marks = marks.set(index, mark);
  state = state.set(STATE_MARK, nextMark(mark));
  state = state.set(STATE_MARKS, marks);
  return state;
}

function nextMark(mark) {
  return mark === marks.X ? marks.O : marks.X;
}