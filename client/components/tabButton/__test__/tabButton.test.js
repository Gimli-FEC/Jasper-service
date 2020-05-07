import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabButton from '../tabButton';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<TabButton title='thisisatest' />);
  expect(asFragment()).toMatchSnapshot();
});
