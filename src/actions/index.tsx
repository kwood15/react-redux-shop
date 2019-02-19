import axios from 'axios';
import {
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILURE
} from '../constants/types';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

const requestProductsSuccess = (payload: any) => ({
  type: REQUEST_PRODUCTS_SUCCESS,
  payload
});

const requestProductsFailure = () => ({
  type: REQUEST_PRODUCTS_FAILURE
});

const getProducts = () => (dispatch: any) => {
  dispatch(requestProducts());
  return axios
    .get('api/books')
    .then(res => res.data)
    .then(products => dispatch(requestProductsSuccess(products)))
    .catch(error => dispatch(requestProductsFailure()));
};

export { getProducts };
