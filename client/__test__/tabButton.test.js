import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabButton from '../components/tabButton';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<TabButton title='thisisatest' />);
  expect(asFragment()).toMatchSnapshot();
});
