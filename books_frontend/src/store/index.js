import { createStore } from 'redux';
import booksReducer from '../reducers/index'

const store = createStore(booksReducer);

export default store;