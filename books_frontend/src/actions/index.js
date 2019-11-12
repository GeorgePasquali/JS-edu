import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from '../actions/constants';

export const fetchBooks = (fetchedBooks) => ({
  type: FETCH_BOOKS,
  books: fetchedBooks
})

export const addBook = bookToAdd => ({
  type: ADD_BOOK,
  book: bookToAdd
})

export const updateBook = bookToUpdate => ({
  type: UPDATE_BOOK,
  book: bookToUpdate
})

export const deleteBook = bookId => ({
  type: DELETE_BOOK,
  bookId: bookId
})