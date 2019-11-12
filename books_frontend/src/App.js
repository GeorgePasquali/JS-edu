import React from 'react';
import AddBookForm from './AddBookForm';
import UpdateBookForm from './UpdateBookForm';
import DeleteBookForm from './DeleteBookForm';
import Board from './Board';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <React.Fragment>
            <AddBookForm />
            <UpdateBookForm />
            <DeleteBookForm />
          </React.Fragment>
        </div>
        <div id="booksData">
          <Board />
        </div>
      </div>
    </Provider>
  );
}

export default App;
