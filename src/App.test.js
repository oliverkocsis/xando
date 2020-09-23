import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('given the component is rendered', () => {

  test('then title is displayed', () => {
    Given.ComponentIsRendered();
    Then.TitleIsDisplayed();
  });

});

class Given {
  static ComponentIsRendered() {
    render(<App />);
  }
}

class Then {
  static TitleIsDisplayed() {
    const title = screen.getByText('X and O');
    expect(title).toBeInTheDocument();
  }
}