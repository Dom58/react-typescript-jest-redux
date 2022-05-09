import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App tsx texts', () => {
  render(<App />);
  const linkElement = screen.getByText('All Messages');
  expect(linkElement).toBeInTheDocument();
});
