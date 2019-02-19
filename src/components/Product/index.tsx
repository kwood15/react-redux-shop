import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { Book } from './types';
// import {  } from '../actions/';

type State = {
  books: Book[];
};

class ProductList extends Component<{}, State> {
  public readonly state: State = {
    books: []
  };

  componentDidMount() {
    this.saveBooks();
  }

  public async getBooks() {
    const response = await axios.get('/api/books');
    const body = await response.data;
    if (response.status !== 200) throw new Error(body.message);
    return body;
  }

  public saveBooks() {
    this.getBooks()
      .then(response => {
        this.setState({
          books: response
        });
      })
      .catch(error => console.log(error));
  }

  public render() {
    const { books } = this.state;
    return (
      <Fragment>
        {books.map(book => (
          <ProductItem key={book.records.data.key} book={book} />
        ))}
      </Fragment>
    );
  }
}

export default ProductList;

// export default connect(
//   mapStateToProps,
//   {  }
// )(App);
