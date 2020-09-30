import React from 'react';
import { createMockStoreWithState, renderComponentWithStore } from './components';
import { screen, fireEvent } from '@testing-library/react';
import Space, { TEST_ID, TEST_ID_X, TEST_ID_O } from './Space';
import * as marks from '../game/marks';
import * as actions from '../store/actions';

describe('given the store is empty', () => {

  let store;
  let random;

  beforeAll(() => {
    store = createMockStoreWithState();
    random = Math.floor(Math.random() * 100);
  });

  test('given the mark is empty when the component is rendered then no mark is displayed', () => {
    renderComponentWithMark(marks._);
    expectMarkXIsNotDisplayed();
    expectMarkOIsNotDisplayed();
  });

  test('given the mark is X when the component is rendered then mark X is displayed', () => {
    renderComponentWithMark(marks.X);
    expectMarkXIsDisplayed();
    expectMarkOIsNotDisplayed();
  });

  test('given the mark is O when the component is rendered then mark O is displayed', () => {
    renderComponentWithMark(marks.O);
    expectMarkOIsDisplayed();
    expectMarkXIsNotDisplayed();
  });

  test('gven component is rendered when clicking on component then mark action is dispatched', () => {
    renderComponentWithMark(marks.X);
    clickOnComponent();
    expectMarkActionIsDispatched();
  });

  const renderComponentWithMark = (mark) => {
    return renderComponentWithStore(<Space index={random} mark={mark} />, store);
  }

  const expectMarkXIsDisplayed = () => {
    const component = screen.getByTestId(TEST_ID_X);
    expect(component).toBeInTheDocument();
  }

  const expectMarkXIsNotDisplayed = () => {
    const component = screen.queryByTestId(TEST_ID_X);
    expect(component).toBeNull();
  }

  const expectMarkOIsDisplayed = () => {
    const component = screen.getByTestId(TEST_ID_O);
    expect(component).toBeInTheDocument();
  }

  const expectMarkOIsNotDisplayed = () => {
    const component = screen.queryByTestId(TEST_ID_O);
    expect(component).toBeNull();
  }

  const clickOnComponent = () => {
    const component = screen.getByTestId(TEST_ID);
    fireEvent.click(component);
  }

  const expectMarkActionIsDispatched = () => {
    const dispatched = store.dispatch.mock.calls[0];
    expect(dispatched[0]).toStrictEqual(actions.mark(random));
  }

});

