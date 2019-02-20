import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import { IBook } from '../../interfaces';
import ProductItem from './ProductItem';

type Props = {
  books: IBook[];
  loading: boolean;
  error: boolean;
  getProducts: () => {};
};

class ProductList extends Component<Props, {}> {
  componentDidMount() {
    this.props.getProducts();
  }

  public render() {
    const { books, loading, error } = this.props;
    return (
      <Fragment>
        {loading && <div data-test-id="loading">Loading...</div>}
        {error && (
          <div data-test-id="error">
            <p>Error...</p>
          </div>
        )}
        {books && books.length > 0
          ? books.map(book => (
              <ProductItem key={book.records.data.key} book={book} />
            ))
          : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  books: state.books.books,
  loading: state.boolean,
  error: state.boolean
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
