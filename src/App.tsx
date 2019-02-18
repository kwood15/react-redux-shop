import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import {  } from '../actions/';
import './scss/main.scss';

// type Props = {

// };

class App extends Component {
  state = {
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

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <header />
        <main />
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
