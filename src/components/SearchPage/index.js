import React from 'react'
import SearchPage from './SearchPage';
import { MyReadsContext } from '../../context/MyReadsContext'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ query, searchBooks, handleSearchBooks, handleBookChange }) =>
      <SearchPage
        {...props}
        query={query}
        books={searchBooks}
        handleSearchBooks={handleSearchBooks}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);