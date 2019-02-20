import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { render, waitForElement } from 'react-testing-library';

import { books } from '../../../testData';
import store from '../../../store';
import ProductList from '../index';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

const setupComponent = () =>
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

test('render no results text', async () => {
  axios.get.mockReturnValue(new Promise(resolve => resolve()));

  const { getByTestId, queryByText } = setupComponent();

  expect(queryByText('Loading...')).toBeInTheDocument();

  const booksNode = await waitForElement(() => getByTestId('books'));
  expect(booksNode).toHaveTextContent('No results found');
  expect(axios.get).toHaveBeenCalledTimes(1);
});

test('render the data', async () => {
  axios.get.mockReturnValue(new Promise(resolve => resolve(books)));

  const { getByTestId, queryByText } = setupComponent();

  expect(queryByText('Loading...')).toBeInTheDocument();

  const booksNode = await waitForElement(() => getByTestId('books'));
  expect(queryByText('Loading...')).not.toBeInTheDocument();
  expect(booksNode).toHaveTextContent('Javascript');
  expect(axios.get).toHaveBeenCalledTimes(1);
});

test('render text when the data has failed to load', async () => {
  axios.get.mockReturnValue(
    new Promise((resolve, reject) => reject('error thrown'))
  );

  const { queryByText, getByTestId } = setupComponent();

  expect(queryByText('Loading...')).toBeInTheDocument();
  expect(queryByText('Failed to load data')).not.toBeInTheDocument();

  const errorNode = await waitForElement(() => getByTestId('error'));
  expect(errorNode).toHaveTextContent('Failed to load data');
});
