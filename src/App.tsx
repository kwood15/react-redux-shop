import React, { FC } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import {  } from '../actions/';
import ProductList from './components/Product';
import './scss/main.scss';

const App: FC = () => (
  <div className="app">
    <header />
    <main>
      <section>
        <ProductList />
      </section>
    </main>
    <footer />
  </div>
);

export default App;
// export default connect(
//   mapStateToProps,
//   {  }
// )(App);
