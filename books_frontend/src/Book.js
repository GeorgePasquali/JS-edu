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
                    <h2>Name: {this.state.book.name}</h2>
                    {/* <h3>Author: {this.state.book.author}</h3>
                    <h4>Publisher: {this.state.book.publisher}</h4>
                    <h5>Year: {this.state.book.year}</h5>
                    <h5>ISBN: {this.state.book.isbn}</h5>*/}
                    <h6>ID: {this.state.book.id}</h6>
                </React.Fragment>
            </span>
        )
    }
}

export default Book;
