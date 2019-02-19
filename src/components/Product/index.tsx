import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import { IBook } from '../../interfaces';
import ProductItem from './ProductItem';

type Props = {
  books: IBook[];
  getProducts: () => {};
};

class ProductList extends Component<Props, {}> {
  componentDidMount() {
    this.props.getProducts();
    console.log('mount', this.props.books);
  }

  // componentDidUpdate(prevProps: Props) {
  //   if (this.props.books !== prevProps.books) {
  //     console.log('update', this.props.books);
  //   }
  // }

  public render() {
    const { books } = this.props;
    console.log('render', books);
    return (
      <Fragment>
        {books && books.length > 0 ? (
          books.map(book => (
            <ProductItem key={book.records.data.key} book={book} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  books: state.books
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
