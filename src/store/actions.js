import * as actions from './actionTypes';

export function mark(index) {
  return {
    type: actions.MARK,
    index,
  }
}

export function reset() {
  return {
    type: actions.RESET,
  }
}