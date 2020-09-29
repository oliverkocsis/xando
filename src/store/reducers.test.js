import { reducer, initialState } from './reducers';
import * as marks from '../game/marks';
import * as actions from './actions';

describe('when store is initialized', () => {

  let state;

  beforeAll(() => {
    state = When.StoreIsInitialized();
  });

  test('then mark is x', () => {
    Then.MarkIsX(state);
  });

  test('then marks are empty', () => {
    Then.MarksAreEmpty(state);
  });

});

describe('given store is initialized and space index is selected when mark action is dispacthed', () => {

  let index;
  let state;

  beforeAll(() => {
    state = Given.StoreIsInitialized();
    index = Given.SpaceIndex();
    state = When.MarkActionIsDispatched(state, index);
  });

  test('then mark is o', () => {
    Then.MarkIsO(state);
  });

  test('then space is marked at index', () => {
    Then.SpaceIsMarkedAtIndex(state, index);
  });

});

class Given {

  static StoreIsInitialized() {
    return initialState;
  }

  static SpaceIndex() {
    const max = 9;
    const random = Math.random() * max
    return Math.floor(random);
  }

}

class When {

  static StoreIsInitialized() {
    return reducer();
  }

  static MarkActionIsDispatched(state, index) {
    return reducer(state, actions.mark(index));
  }

}

class Then {

  static MarkIsX(state) {
    expect(state.mark).toBe(marks.X);
  }

  static MarkIsO(state) {
    expect(state.mark).toBe(marks.O);
  }

  static MarksAreEmpty(state) {
    expect(state.marks).toStrictEqual(['', '', '', '', '', '', '', '', '',]);
  }

  static SpaceIsMarkedAtIndex(state, index) {
    const mark = state.marks[index];
    expect(mark).toBe(marks.X);
  }

}