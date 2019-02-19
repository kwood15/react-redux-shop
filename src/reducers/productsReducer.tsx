import {
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILURE
} from '../constants/types';

const initialState = {
  loading: false,
  books: [],
  error: false
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case REQUEST_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
