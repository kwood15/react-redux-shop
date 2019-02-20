import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { render, waitForElement } from 'react-testing-library';

import { books } from '../../../testData';
import store from '../../../store';
import ProductList from '../index';

jest.mock('axios');

const setupComponent = () =>
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

test('renders a list of data', async () => {
  axios.get.mockReturnValue(new Promise(resolve => resolve(books)));

  const { queryByText, getByText } = setupComponent();

  expect(axios.get).toHaveBeenCalledTimes(1);
  await waitForElement(() => getByText('Javascript'));
  expect(queryByText('Javascript')).toBeInTheDocument();
});

// test('renders an error message', async () => {
//   axios.get.mockReturnValue(new Promise(reject => reject('error thrown')));
//   const { container, debug, getByText, queryByText, getByTestId } = render(
//     <Provider store={store}>
//       <ProductList />
//     </Provider>
//   );

//   await waitForElement(() => getByText('Error...'));
//   expect(getByTestId('error')).toHaveTextContent('Error');
// });
