// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { original } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /ReactDOM.render is no longer supported in React 18/.test(args[0]) ||
      'Error: Expected key descriptor but found "" in ""'
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
