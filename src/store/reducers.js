import * as actions from './actionTypes';
import { fromJS } from 'immutable';

export const MARK_X = 'x';
export const MARK_O = 'o';

const STATE_MARKS = 'marks';
const STATE_MARK = 'mark';

export const initialState = {
  mark: MARK_X,
  marks: ['', '', '', '', '', '', '', '', '',],
}

export function reducer(state = initialState, action) {
  console.debug(state);
  console.debug(action);
  let newState = fromJS(state);
  switch (action?.type) {
    case actions.MARK:
      newState = reduceMark(newState, action);
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
  return mark === MARK_X ? MARK_O : MARK_X;
}