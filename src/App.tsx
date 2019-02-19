import React, { FC } from 'react';
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
