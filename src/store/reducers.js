import * as actions from './actionTypes';
import * as marks from '../game/marks';
import { Counter } from '../game/counter';
import { fromJS } from 'immutable';

const STATE_MARKS = 'marks';
const STATE_MARK = 'mark';
const STATE_WINNER = 'winner';

export const initialState = {
  mark: marks.X,
  marks: new Array(9).fill(marks._),
  winner: null,
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
    case actions.RESET:
      newState = reduceReset(immutableState, action);
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
  const counter = new Counter(marks.toArray(), 3, 3, 3);
  const winner = counter.whoDidWin();
  if (winner) {
    console.log(`Winner: ${winner}`);
    state = state.set(STATE_WINNER, winner);
  }
  return state;
}

function reduceWin(state, action) {
  const mark = action.mark;
  state = state.set(STATE_WINNER, mark);
  return state;
}

function reduceReset(state, action) {
  return fromJS(initialState);
}

function nextMark(mark) {
  return mark === marks.X ? marks.O : marks.X;
}