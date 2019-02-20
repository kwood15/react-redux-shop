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
    // console.log(this.props);
    if (error) {
      return (
        <div data-testid="error">
          <p>Failed to load data</p>
        </div>
      );
    }

    return (
      <Fragment>
        {loading && (
          <div>
            <p>Loading...</p>
          </div>
        )}

        <div data-testid="books">
          {!error && books && books.length === 0 && <p>No results found</p>}
          {books &&
            books.length > 0 &&
            books.map(book => (
              <ProductItem key={book.records.data.key} book={book} />
            ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  books: state.books.books,
  loading: state.books.loading,
  error: state.books.error
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
