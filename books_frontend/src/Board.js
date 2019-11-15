import React from 'react';
import Book from './Book';
import { fetchBooks } from './actions/index';
import { connect } from 'react-redux';
import store from './store/index';
import uuid from "uuid";

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
          store.dispatch(fetchBooks(result));
        });
  }

  render() {
    return (
      <div id="booksDiv">
        <React.Fragment>
          {this.props.books.map((currentBook, ind) => <Book book={currentBook} key={uuid.v4()} />)}
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(Board);