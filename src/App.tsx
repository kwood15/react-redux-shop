import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import {  } from '../actions/';
import './scss/main.scss';

type Book = {
  records: {
    data: {
      key: string;
      cover: {
        small?: string;
      };
    };
  };
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
                <img src={book.records.data.cover.small} />
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
