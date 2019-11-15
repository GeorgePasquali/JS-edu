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
      const bookIndex = arrayUpdate.findIndex(element => element.id == action.book.id);
      arrayUpdate[bookIndex] = action.book;
      console.log(Object.assign({}, state, {
        books: arrayUpdate
      }));
      return Object.assign({}, state, {
        books: arrayUpdate
      })

    case DELETE_BOOK:
      return Object.assign({}, state, {
        books: state.books.filter((element, ind) => element.id != action.bookId)
      })

    default:
      return state
  }
}

export default booksReducer;