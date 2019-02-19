import React from 'react';
import { Provider } from 'react-redux';
import { render, waitForElement } from 'react-testing-library';
import axios from 'axios';

import store from '../../../store';
import ProductList from '../index';
import { books } from '../../../testData';

jest.mock('axios');

test.skip('renders a list of data', async () => {
  axios.get.mockResolvedValue(new Promise(resolve => resolve(books)));
  const { getByText } = render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

  expect(getByText('Loading...')).toBeInTheDocument();

  await waitForElement(() => getByText('Books'));
  expect(getByText('Javascript')).toBeInTheDocument();
});
