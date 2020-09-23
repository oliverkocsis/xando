import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

test('renders spaces', () => {
  const spaces = ['l', 'o', 'r', 'e', 'm'];
  const { getByText } = render(<Grid spaces={spaces} />);
  for (const space of spaces) {
    const element = getByText(space);
    expect(element).toBeInTheDocument();
  }
});
