import React, { useState } from 'react';
import { checkInputs } from './helpFunctions';
import { addBook } from './actions/index';
import store from './store';

const initialState = {
    bookName: "",
    bookAuthor: "",
    bookPublisher: "",
    bookYear: "",
    bookISBN: ""
};

const AddBookForm = () => {
    let nameInput, authorInput, publisherInput, yearInput, isbnInput;
    let book;
    const [
        { bookName, bookAuthor, bookPublisher, bookYear, bookISBN },
        setState
    ] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const isValidForm = () => {
        const input_form = document.getElementById("add-form");

        if (input_form != null) {
            nameInput = document.getElementById("bookName");
            authorInput = document.getElementById("bookAuthor");
            publisherInput = document.getElementById("bookPublisher");
            yearInput = document.getElementById("bookYear");
            isbnInput = document.getElementById("bookISBN");

            if (nameInput != null && authorInput != null && publisherInput != null && yearInput != null && isbnInput != null) {

                if (checkInputs([bookName, bookAuthor, bookPublisher, bookYear, bookISBN])) {
                    book = {
                        name: bookName,
                        author: bookAuthor,
                        publisher: bookPublisher,
                        year: bookYear,
                        isbn: bookISBN
                    }

                    return true;
                }
            }
        }

        return false;
    }

    const bookExists = () => {
        let exists = false;

        store.getState().books.forEach((element) => {
            if (book.isbn === element.isbn) {
                exists = true;
            }
        })

        return exists;
    }

    const submit = (event) => {
        event.preventDefault();

        if (isValidForm()) {
            if (bookExists()) {
                alert("Book already exists!");
                return;
            }

            fetch("http://localhost:5000/books/create",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(book)
                }).then(() => {
                    store.dispatch(addBook(book));
                    clearState();
                });
        } else {
            console.log("Something went wrong!");
        }
    }

    return (
        <form id="add-form" onSubmit={submit}>
            <label>Book name: </label>
            <input type="text" id="bookName" name="bookName" value={bookName} onChange={handleChange} /> <br />
            <label>Book author: </label>
            <input type="text" id="bookAuthor" name="bookAuthor" value={bookAuthor} onChange={handleChange} /> <br />
            <label>Book publisher: </label>
            <input type="text" id="bookPublisher" name="bookPublisher" value={bookPublisher} onChange={handleChange} /> <br />
            <label>Book year: </label>
            <input type="text" id="bookYear" name="bookYear" value={bookYear} onChange={handleChange} /> <br />
            <label>Book ISBN: </label>
            <input type="text" id="bookISBN" name="bookISBN" value={bookISBN} onChange={handleChange} /> <br />
            <button className="buttons">Add book</button>
        </form>
    )
}

export default AddBookForm;
