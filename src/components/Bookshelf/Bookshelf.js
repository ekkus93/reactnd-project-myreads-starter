import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../BooksGrid/'
import '../../App.css'

class Bookshelf extends Component {
  render() {
    //console.log("###Bookshelf");
    const { title, books, shelf } = this.props;
    //console.log("###Bookshelf - handleBookChange: ", handleBookChange);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={books}
            shelf={shelf}
          />
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  shelf: PropTypes.string,
}

export default Bookshelf;