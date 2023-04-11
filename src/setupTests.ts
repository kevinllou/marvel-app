// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import server from './mocks/api/server';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  server.printHandlers();
  cleanup();
});

afterAll(() => server.close());
