import React, { useState } from 'react';
import { deleteBook } from './actions/index';
import store from './store';
import { checkInputs } from './helpFunctions';

const DeleteBookForm = () => {

    const [bookId, setId] = useState('');
    let idInput;

    const clearState = () => {
        setId('');
    };

    const handleChange = e => {
        const { value } = e.target;
        setId(value);
    };

    const checkForm = () => {
        const input_form = document.getElementById("delete-form");

        if (input_form != null) {
            idInput = document.getElementById("bookId");

            if (idInput != null) {
                if (checkInputs([bookId])) {
                    return true;
                }
            }
        }

        return false;
    }

    const submit = (event) => {
        event.preventDefault();

        if (checkForm()) {
            fetch("http://localhost:5000/books/delete/" + bookId,
                {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });

            clearState();
            store.dispatch(deleteBook(bookId));
        } else {
            console.log("Something went wrong!");
        }
    }

    return (
        <form id="delete-form" onSubmit={submit}>
            <label id="bookIDLabel">Book ID: </label>
            <input type="text" id="bookId" name="bookId" value={bookId} onChange={handleChange} /> <br />
            <button style={{ marginRight: "100px" }} className="buttons">Delete book</button>
        </form>
    )
}

export default DeleteBookForm;
