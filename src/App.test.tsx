import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import store from './store';
import App from './App';

test('renders the component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText('Books')).toBeInTheDocument();
});
