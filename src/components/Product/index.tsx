import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/';
import { IBook } from '../../interfaces';
import ProductItem from './ProductItem';

type Props = {
  books: IBook[];
  getProducts: () => void;
};

class ProductList extends Component<Props, {}> {
  componentDidMount() {
    this.props.getProducts();
  }

  public render() {
    const { books } = this.props;
    return (
      <Fragment>
        {books.map(book => (
          <ProductItem key={book.records.data.key} book={book} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: Props) => ({
  books: state.books
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
