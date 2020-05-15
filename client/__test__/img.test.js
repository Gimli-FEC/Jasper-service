import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from '../img';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<Img link='https://fecpictures.s3.us-east-2.amazonaws.com/pics/100.jpg' id={1} key={1}/>);
  expect(asFragment()).toMatchSnapshot();
});
