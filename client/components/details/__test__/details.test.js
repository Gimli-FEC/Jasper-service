import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '../details';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<Details text='Praesentium dicta et ut quisquam. Dolor mollitia omnis accusamus minus distinctio accusamus. Velit consequatur quos. Sed ab magnam amet. Dolorem omnis illo. Praesentium dolore dolores molestiae eos architecto rerum consequatur maiores qui. Dicta similique ab dignissimos veritatis eos distinctio iusto itaque. Aliquid natus hic. Fugiat nisi nam eligendi molestiae quasi cumque. Soluta esse in non aut quia.' id='1' />);
  expect(asFragment()).toMatchSnapshot();
});
