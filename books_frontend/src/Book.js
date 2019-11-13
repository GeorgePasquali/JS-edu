import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: props.book
        };
    }

    render() {
        return (
            <span id='square-div'>
                <React.Fragment>
                    <h2 id="bookName">Name: {this.state.book.name}</h2>
                    <h3 id="bookAuthor">Author: {this.state.book.author}</h3>
                    <h4 id="bookPublisher">Publisher: {this.state.book.publisher}</h4>
                    <h5 id="bookYear">Year: {this.state.book.year}</h5>
                    <h5 id="bookISBN">ISBN: {this.state.book.isbn}</h5>
                    <h6 id="bookName">ID: {this.state.book.id}</h6>
                </React.Fragment>
            </span>
        )
    }
}

export default Book;
