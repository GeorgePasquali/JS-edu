import React, { useState } from 'react';
import { checkInputs } from './helpFunctions';
import { updateBook } from './actions/index';
import store from './store/index';

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

                if (checkInputs([bookId, bookName, bookAuthor, bookPublisher, bookYear, bookISBN])) {
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
        }

        return false;
    }

    const bookExists = () => {
        let exists = false;

        store.getState().books.forEach((element) => {
            if (book.id === element.id) {
                exists = true;
            }
        })

        return exists;
    }

    const submit = (event) => {
        event.preventDefault();

        if (isValidForm()) {
            if (!bookExists()) {
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
                    console.log(book.id);
                    store.dispatch(updateBook(book));
                    clearState();
                });
        } else {
            console.log("Something went wrong!");
        }
    }

    return (
        <form id="update-form" onSubmit={submit}>
            <label>Book id: </label>
            <input type="text" id="bookId" name="bookId" value={bookId} onChange={handleChange} /> <br />
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
            <button className="buttons">Update book</button>
        </form>
    )
}

export default UpdateBookForm;
