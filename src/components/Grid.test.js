import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';

describe('given the component is rendered', () => {

  test('then spaces are displayed', () => {
    Given.ComponentIsRendered();
    Then.SpacesAreDisplayed();
  });

});

const spaces = ['l', 'o', 'r', 'e', 'm'];

class Given {
  static ComponentIsRendered() {

    render(<Grid spaces={spaces} />);
  }
}

class Then {
  static SpacesAreDisplayed() {
    for (const space of spaces) {
      const element = screen.getByText(space);
      expect(element).toBeInTheDocument();
    }
  }
}