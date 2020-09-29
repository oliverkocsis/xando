import React from 'react';
import { createMockStoreWithState, renderComponentWithStore } from './components';
import { screen, fireEvent } from '@testing-library/react';
import Space, { TEST_ID } from './Space';
import * as marks from '../game/marks';
import * as actions from '../store/actions';

describe('given store is empty', () => {

  let store;

  beforeEach(() => {
    store = Given.StoreIsEmpty();
  });

  test('mark is x when the component is rendered then mark x is displayed', () => {
    const mark = Given.MarkIsX();
    When.ComponentIsRendered(store, mark);
    Then.MarkXIsDisplayed();
  });

  test('mark is o when the component is rendered then mark o is displayed', () => {
    const mark = Given.MarkIsO();
    When.ComponentIsRendered(store, mark);
    Then.MarkOIsDisplayed();
  });

  test('component is rendered when clicking on component then mark action is dispatched', () => {
    Given.ComponentIsRendered(store);
    When.ClickingOnComponent();
    Then.MarkActionIsDispatched(store);
  });

});

const randomIndex = Math.floor(Math.random() * 10);

class Given {
  static StoreIsEmpty() {
    return createMockStoreWithState();
  }
  static MarkIsX() {
    return marks.X;
  }
  static MarkIsO() {
    return marks.O;
  }
  static ComponentIsRendered(store) {
    return renderComponentWithStore(<Space index={randomIndex} mark={marks.X} />, store);
  }
}

class When {
  static ComponentIsRendered(store, mark) {
    return renderComponentWithStore(<Space index={randomIndex} mark={mark} />, store);
  }
  static async ClickingOnComponent() {
    const component = screen.getByTestId(TEST_ID);
    fireEvent.click(component);
  }
}

class Then {
  static MarkXIsDisplayed() {
    const element = screen.getByTestId(marks.X);
    expect(element).toBeInTheDocument();
  }

  static MarkOIsDisplayed() {
    const element = screen.getByTestId(marks.O);
    expect(element).toBeInTheDocument();
  }

  static MarkActionIsDispatched(store) {
    const dispatched = store.dispatch.mock.calls[0];
    expect(dispatched[0]).toStrictEqual(actions.mark(randomIndex));
  }
}