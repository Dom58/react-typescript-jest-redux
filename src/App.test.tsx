import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from './App';
import Footer from "./components/footer/Footer";
import { store } from './redux/store';

test('renders App tsx texts', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText('All Messages');
  expect(linkElement).toBeInTheDocument();
});
