import React, { FC, Fragment } from 'react';
import { IBook } from '../../interfaces';

type Props = {
  book: IBook;
};

const ProductItem: FC<Props> = ({ book }) => (
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
      <img src={book.records.data.cover.small} alt={book.records.data.title} />
    </a>
    <p>Published: {book.records.data.publish_date}</p>
    <p>Author details</p>
    <Fragment>
      {book.records.data.authors.map(author => (
        <div key={author.name}>
          <span>{author.name}</span>
          <a href={author.url} target="_blank" title="View author details">
            View author details >>
          </a>
        </div>
      ))}
    </Fragment>
  </div>
);

export default ProductItem;
