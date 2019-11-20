import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from '../actions/constants';

const initialState = {
  books: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return Object.assign({}, state, {
        books: action.books
      });

    case ADD_BOOK:
      return Object.assign({}, state, {
        books: state.books.concat(action.book)
      });

    case UPDATE_BOOK:
      let arrayUpdate = [...state.books]
      const bookIndex = arrayUpdate.findIndex(element => element.isbn == action.book.isbn);
      arrayUpdate[bookIndex] = action.book;

      return Object.assign({}, state, {
        books: arrayUpdate
      })

    case DELETE_BOOK:
      return Object.assign({}, state, {
        books: state.books.filter((element, ind) => element.isbn != action.bookISBN)
      })

    default:
      return state
  }
}

export default booksReducer;