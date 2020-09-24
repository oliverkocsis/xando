import * as actions from './actionTypes';

export function Mark(index) {
  return {
    type: actions.MARK,
    index,
  }
}