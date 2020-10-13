import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import { TEST_ID } from './components/Space';
import { TEST_ID as TEST_ID_X } from './components/X';
import { TEST_ID as TEST_ID_O } from './components/O';

describe('given the app is rendered', () => {

  beforeEach(() => {
    render(<App />);
  });

  test('then space is marked as X', () => {
    const index = 0;
    clickOnSpace(index);
    expectMarkXIsDisplayed(index);
  });

  test('then space is marked as O', () => {
    const index = 1;
    clickOnSpace(index);
    expectMarkOIsDisplayed(index);
  });

  const spaceAtIndex = (index) => {
    const spaces = screen.queryAllByTestId(TEST_ID);
    const space = spaces[index];
    return space;
  }

  const clickOnSpace = (index) => {
    const space = spaceAtIndex(index);
    fireEvent.click(space);
  }

  const expectMarkXIsDisplayed = (index) => {
    expectMarkIsDisplayed(index, TEST_ID_X);
  }

  const expectMarkOIsDisplayed = (index) => {
    expectMarkIsDisplayed(index, TEST_ID_O);
  }

  const expectMarkIsDisplayed = (index, testId) => {
    const space = spaceAtIndex(index);
    const mark = getByTestId(space, testId);
    expect(mark).toBeInTheDocument();
  }

});