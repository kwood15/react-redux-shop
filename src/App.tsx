import React, { FC } from 'react';
import ProductList from './components/Product';
import './scss/main.scss';

const App: FC = () => (
  <div className="app">
    <header />
    <main>
      <section>
        <h1>Books</h1>
        <ProductList />
      </section>
    </main>
    <footer />
  </div>
);

export default App;
