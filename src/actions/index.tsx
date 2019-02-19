import axios from 'axios';
import { IBook } from '../interfaces';
import {
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILURE
} from '../constants/types';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

const requestProductsSuccess = (payload: IBook[]) => ({
  type: REQUEST_PRODUCTS_SUCCESS,
  payload
});

const requestProductsFailure = (error: boolean) => ({
  type: REQUEST_PRODUCTS_FAILURE,
  error
});

const getProducts = () => (dispatch: any) => {
  dispatch(requestProducts());
  return axios
    .get('api/books')
    .then(response => response.data)
    .then(books => dispatch(requestProductsSuccess(books)))
    .catch(error => dispatch(requestProductsFailure(error)));
};

export { getProducts };
