import React from 'react';
import Book from './Book';
import { fetchBooks } from './actions/index';
import { connect } from 'react-redux';

class Board extends React.Component {
  componentDidMount() {
    fetch("http://localhost:5000/books/get", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.props.dispatch(fetchBooks(result));
        });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          {this.props.books.map((currentBook, ind) => <Book book={currentBook} key={ind} />)}
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(Board);