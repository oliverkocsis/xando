import React from 'react';
import { createMockStoreWithState, renderComponentWithStore } from './components';
import { screen, fireEvent } from '@testing-library/react';
import Space, { TEST_ID } from './Space';
import { TEST_ID as TEST_ID_X } from './marks/X';
import { TEST_ID as TEST_ID_O } from './marks/O';
import * as marks from '../game/marks';
import * as actions from '../store/actions';

describe('given the store is empty', () => {

  let store;
  let random;

  beforeEach(() => {
    store = createMockStoreWithState();
    random = Math.floor(Math.random() * 100);
  });

  test('given the mark is empty when the component is rendered then no mark is displayed', () => {
    renderComponentWithMark(marks._);
    expectMarkXIsNotDisplayed();
    expectMarkOIsNotDisplayed();
  });

  test('given the mark is X when the component is rendered then only mark X is displayed', () => {
    renderComponentWithMark(marks.X);
    expectMarkXIsDisplayed();
    expectMarkOIsNotDisplayed();
  });

  test('given the mark is O when the component is rendered then only mark O is displayed', () => {
    renderComponentWithMark(marks.O);
    expectMarkOIsDisplayed();
    expectMarkXIsNotDisplayed();
  });

  test('given component is rendered and the mark is empty and the component is enabled when clicking on component then mark action is dispatched', () => {
    renderComponentWithMarkAndEnabled(marks._, true);
    clickOnComponent();
    expectMarkActionIsDispatched();
  });

  test('given component is rendered and the mark is empty and the component is not enabled when clicking on component then mark action is not dispatched', () => {
    renderComponentWithMarkAndEnabled(marks._, false);
    clickOnComponent();
    expectMarkActionIsNotDispatched();
  });

  test('given component is rendered the mark is not empty and the component is enabled when clicking on component then mark action is not dispatched', () => {
    renderComponentWithMarkAndEnabled(marks.X, true);
    clickOnComponent();
    expectMarkActionIsNotDispatched();
  });

  test('given component is rendered the mark is not empty and the component is not enabled when clicking on component then mark action is not dispatched', () => {
    renderComponentWithMarkAndEnabled(marks.X, false);
    clickOnComponent();
    expectMarkActionIsNotDispatched();
  });

  const renderComponentWithMark = (mark) => {
    return renderComponentWithMarkAndEnabled(mark, true);
  }

  const renderComponentWithMarkAndEnabled = (mark, enabled) => {
    return renderComponentWithStore(<Space index={random} mark={mark} enabled={enabled} />, store);
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

  const expectMarkActionIsNotDispatched = () => {
    const dispatched = store.dispatch.mock.calls[0];
    expect(dispatched).toBeUndefined();
  }

});

