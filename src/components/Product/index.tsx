import React, { Component } from 'react';
import axios from 'axios';
// import {  } from '../actions/';

type Book = {
  records: {
    data: {
      key: string;
      url?: string;
      title: string;
      subtitle: string;
      cover: {
        small?: string;
      };
      authors: Author[];
      publish_date: string;
    };
  };
};

type Author = {
  key: string;
  name?: string;
  url?: string;
};

type State = {
  books: Book[];
};

class ProductList extends Component<{}, State> {
  readonly state: State = {
    books: []
  };

  componentDidMount() {
    this.saveBooks();
  }

  async getBooks() {
    const response = await axios.get('/api/books');
    const body = await response.data;
    if (response.status !== 200) throw new Error(body.message);
    return body;
  }

  saveBooks() {
    this.getBooks()
      .then(response => {
        this.setState({
          books: response
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { books } = this.state;
    return (
      <>
        {books.map((book: Book) => (
          <div key={book.records.data.key}>
            <h3>
              {book.records.data.title} {book.records.data.subtitle}
            </h3>
            <a
              href={book.records.data.url}
              target="_blank"
              title={
                book.records.data.subtitle
                  ? `${book.records.data.title} ${book.records.data.subtitle}`
                  : book.records.data.title
              }
            >
              <img
                src={book.records.data.cover.small}
                alt={book.records.data.title}
              />
            </a>
            <p>Published: {book.records.data.publish_date}</p>
            <p>Author details</p>
            <p>
              {book.records.data.authors.map((author: Author) => (
                <>
                  <span key={author.name}>{author.name}</span>
                  <a
                    href={author.url}
                    target="_blank"
                    title="View author details"
                  >
                    View author details >>
                  </a>
                </>
              ))}
            </p>
          </div>
        ))}
      </>
    );
  }
}

export default ProductList;

// export default connect(
//   mapStateToProps,
//   {  }
// )(App);
