import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Home from '../home';

describe('should test Homepage component', () => {
  let homeContainer: HTMLDivElement;

  beforeEach(() => {
    homeContainer = document.createElement('div');
    document.body.appendChild(homeContainer);
    ReactDOM.render(
      <Provider store={store}>
        <Home />
      </Provider>,
      homeContainer
    );
  });

  afterEach(() => {
    document.body.removeChild(homeContainer);
    homeContainer.remove();
  });

  it('should test homepage components', () => {
    const headings = homeContainer.querySelectorAll('h2');
    const buttons = homeContainer.querySelectorAll('button');

    expect(headings).toHaveLength(1);
    expect(buttons).toHaveLength(6);
  });

  it('should test show calculator button', async () => {
    const buttonShowCalculator = await screen.getByTestId('showCalculator');
    const showCal = homeContainer.querySelectorAll('calcForm');

    fireEvent.mouseMove(buttonShowCalculator);
    expect(showCal).toBeTruthy();
  });
});
