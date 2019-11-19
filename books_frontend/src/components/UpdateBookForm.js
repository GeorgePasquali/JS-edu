import React, { useState } from 'react';
import { updateBook } from '../actions/index';
import store from '../store/index';

const initialState = {
    bookId: "",
    bookName: "",
    bookAuthor: "",
    bookPublisher: "",
    bookYear: "",
    bookISBN: ""
};

const UpdateBookForm = () => {
    let idInput, nameInput, authorInput, publisherInput, yearInput, isbnInput;
    let book;
    const [
        { bookId, bookName, bookAuthor, bookPublisher, bookYear, bookISBN },
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
        const input_form = document.getElementById("update-form");

        if (input_form != null) {
            idInput = document.getElementById("bookId");
            nameInput = document.getElementById("bookName");
            authorInput = document.getElementById("bookAuthor");
            publisherInput = document.getElementById("bookPublisher");
            yearInput = document.getElementById("bookYear");
            isbnInput = document.getElementById("bookISBN");

            if (idInput != null && nameInput != null && authorInput != null && publisherInput != null && yearInput != null && isbnInput != null) {
                if (!isNaN(Number(bookId)) && !isNaN(Number(bookYear))) {
                    book = {
                        id: bookId,
                        name: bookName,
                        author: bookAuthor,
                        publisher: bookPublisher,
                        year: bookYear,
                        isbn: bookISBN
                    }

                    return true;
                } else {
                    alert("Id and year must be numbers!");
                }
            }
        }

        return false;
    }

    const bookExists = () => {
        let exists = false;

        store.getState().books.forEach((element) => {
            if (book.id == element.id) {
                exists = true;
            }
        })

        return exists;
    }

    const submit = (event) => {
        event.preventDefault();

        if (isValidForm()) {
            if (!bookExists()) {
                console.log("TEST: " + bookId);
                alert("Book with id = " + bookId + " doesn't exist!");
                return;
            }

            fetch("http://localhost:5000/books/update",
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(book)
                }).then(() => {
                    store.dispatch(updateBook(book));
                    clearState();
                });
        }
    }

    return (
        <form id="update-form" onSubmit={submit}>
            <label>Book id: </label>
            <input type="number" id="bookId" name="bookId" value={bookId} onChange={handleChange} min="1" required /> <br />
            <label>Book name: </label>
            <input type="text" id="bookName" name="bookName" value={bookName} onChange={handleChange} pattern="[A-Za-z]+" required title="Only characters allowed" /> <br />
            <label>Book author: </label>
            <input type="text" id="bookAuthor" name="bookAuthor" value={bookAuthor} onChange={handleChange} pattern="[A-Za-z]+" required title="Only characters allowed" /> <br />
            <label>Book publisher: </label>
            <input type="text" id="bookPublisher" name="bookPublisher" value={bookPublisher} onChange={handleChange} pattern="[A-Za-z]+" required title="Only characters allowed" /> <br />
            <label>Book year: </label>
            <input type="number" id="bookYear" name="bookYear" value={bookYear} onChange={handleChange} min="1445" max="2019" required /> <br />
            <label>Book ISBN: </label>
            <input type="text" id="bookISBN" name="bookISBN" value={bookISBN} onChange={handleChange} maxLength="13" pattern="[0-9]{13}" required title="ISBN length must be 13 (only numbers allowed)" /> <br />
            <button className="buttons">Update book</button>
        </form>
    )
}

export default UpdateBookForm;
