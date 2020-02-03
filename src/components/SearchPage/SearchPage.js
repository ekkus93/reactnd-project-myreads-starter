import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBooksBar from '../SearchBooksBar/'
import SearchBookResults from '../SearchBooksResults/'
import '../../App.css'

class SearchPage extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar />
        <SearchBookResults
          books={books}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  books: PropTypes.array,
}

export default SearchPage;