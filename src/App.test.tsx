import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

test('renders the component', () => {
  const { getByText } = render(<App />);
  expect(getByText('')).toBeInTheDocument();
});
