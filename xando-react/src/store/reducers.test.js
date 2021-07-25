import { reducer, initialState } from './reducers';
import * as marks from '../game/marks';
import * as actions from './actions';

describe('when reducer is executed the first time', () => {

  let state;

  beforeAll(() => {
    state = reducer();
  });

  test('then mark is X', () => {
    expect(state.mark).toBe(marks.X);
  });

  test('then marks are empty', () => {
    expect(state.marks).toStrictEqual(new Array(9).fill(marks._));
  });

});

describe('given the initial state and a random index initialized and space index is selected when mark action is dispacthed', () => {

  let state;
  let index;

  beforeAll(() => {
    state = initialState;
    index = randomIndex();
    state = reducer(state, actions.mark(index));
  });

  test('then mark is O', () => {
    expect(state.mark).toBe(marks.O);
  });

  test('then space is marked at index', () => {
    expectSpaceIsMarkedAtIndex();
  });

  const randomIndex = () => {
    const max = 9;
    const random = Math.random() * max
    return Math.floor(random);
  }

  const expectSpaceIsMarkedAtIndex = () => {
    const mark = state.marks[index];
    expect(mark).toBe(marks.X);
  }

});
