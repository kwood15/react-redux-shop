import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import {  } from '../actions/';
import './scss/main.scss';

type Book = {
  name?: string;
  records: {
    data: {
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
    this.getBooks()
      .then(response =>
        this.setState({
          books: response.data
        })
      )
      .catch(error => console.log(error));
  }

  getBooks = async () => {
    const response = await axios.get('/api/books');
    const body = await response.data;
    if (response.status !== 200) throw new Error(body.message);
    return body;
  };

  public render() {
    const { books } = this.state;
    return (
      <div className="app">
        <header />
        <main>
          {books.map(book => (
            <div>{book.records.data.cover.small}</div>
          ))}
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
