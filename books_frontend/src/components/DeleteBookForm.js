import React, { useState } from 'react';
import { deleteBook } from '../actions/index';
import { bookExists } from '../utils'
import store from '../store/index';

const DeleteBookForm = () => {

    const [bookISBN, setISBN] = useState('');
    let isbnInput;

    const clearState = () => {
        setISBN('');
    };

    const handleChange = e => {
        const { value } = e.target;
        setISBN(value);
    };

    const isValidForm = () => {
        const input_form = document.getElementById("delete-form");

        if (input_form != null) {
            isbnInput = document.getElementById("bookISBN");

            if (isbnInput != null) {
                return true;
            }
        }

        return false;
    }

    const submit = (event) => {
        event.preventDefault();

        if (isValidForm()) {
            if (!bookExists(bookISBN)) {
                alert("Book with ISBN = " + bookISBN + " doesn't exist!");
                return;
            }

            fetch("http://localhost:5000/books/delete/" + bookISBN,
                {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(() => {
                    store.dispatch(deleteBook(bookISBN));
                    clearState();
                });

            store.dispatch(deleteBook(bookISBN));
            clearState();
        }
    }

    return (
        <form id="delete-form" onSubmit={submit}>
            <label id="bookISBNLabel">Book ISBN: </label>
            <input type="number" id="bookISBN" name="bookISBN" value={bookISBN} onChange={handleChange} min="1" required /> <br />
            <button style={{ marginRight: "100px" }} className="buttons">Delete book</button>
        </form>
    )
}

export default DeleteBookForm;
