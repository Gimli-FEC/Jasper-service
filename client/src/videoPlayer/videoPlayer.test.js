import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoPlayer from './videoPlayer';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<VideoPlayer props={{ url: 'https://www.youtube.com/embed/2LNOT2TYcmM', key: 1 }} />);
  expect(asFragment()).toMatchSnapshot();
});
