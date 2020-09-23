import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('given the component is rendered', () => {

  test('then title is displayed', () => {
    Given.ComponentIsRendered();
    Then.GridIsDisplayed();
  });

});

class Given {
  static ComponentIsRendered() {
    render(<App />);
  }
}

class Then {
  static GridIsDisplayed() {
    const xs = screen.getAllByText('x');
    expect(xs.length).toBe(5);
    const os = screen.getAllByText('o');
    expect(os.length).toBe(4);
  }
}