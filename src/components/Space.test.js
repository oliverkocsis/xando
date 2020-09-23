import React from 'react';
import { render, screen } from '@testing-library/react';
import Space from './Space';

describe('given the component is rendered', () => {

  test('then vale is displayed', () => {
    Given.ComponentIsRendered();
    Then.MarkIsDisplayed();
  });

});

const mark = 'x';

class Given {
  static ComponentIsRendered() {
    render(<Space index={0} mark={mark} />);
  }
}

class Then {
  static MarkIsDisplayed() {
    const element = screen.getByText(mark);
    expect(element).toBeInTheDocument();
  }
}