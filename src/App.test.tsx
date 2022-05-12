import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from "./components/footer/Footer";

test('renders App tsx texts', () => {
  render(<App />);
  const linkElement = screen.getByText('All Messages');
  expect(linkElement).toBeInTheDocument();
});

test('renders footer page', () => {
  render(<Footer author='test'/>);
  const linkElementF = screen.getByText('Copyright21');
  expect(linkElementF).toBeInTheDocument();
});
