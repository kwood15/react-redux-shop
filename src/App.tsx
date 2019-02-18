import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import {  } from '../actions/';
import './scss/main.scss';

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

class App extends Component<{}, State> {
  readonly state: State = {
    books: []
  };

  // todo remove from state
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
      <div className="app">
        <header />
        <main>
          <div>
            {books.map(book => (
              <div key={book.records.data.key}>
                <h3>
                  {book.records.data.title} {book.records.data.subtitle}
                </h3>
                <a
                  href={book.records.data.url}
                  title={book.records.data.title + book.records.data.subtitle}
                >
                  <img
                    src={book.records.data.cover.small}
                    alt={book.records.data.title}
                  />
                </a>
                <p>Published: {book.records.data.publish_date}</p>
                <p>Author details</p>
                <p>
                  {book.records.data.authors.map(author => (
                    <span key={author.name}>{author.name}</span>
                  ))}
                </p>
                <a
                  href={`${book.records.data.authors.map(
                    author => author.url
                  )}`}
                  target="_blank"
                >
                  {book.records.data.authors.map(author => (
                    <span>{author.name}</span>
                  ))}
                </a>
              </div>
            ))}
          </div>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
// export default connect(
//   mapStateToProps,
//   {  }
// )(App);
