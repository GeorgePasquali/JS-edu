const handlers = require('./handlers');
const schemas = require('./schemas');

let routes = [
    {
        method: 'GET',
        path: '/books/get',
        handler: handlers.getBooks
    },
    {
        method: 'POST',
        path: '/books/create',
        handler: handlers.createBook,
        options: {
            validate: {
                payload: schemas.createBookSchema
            }
        }
    },
    {
        method: 'PUT',
        path: '/books/update',
        handler: handlers.updateBook,
        options: {
            validate: {
                payload: schemas.updateBookSchema
            }
        }
    },
    {
        method: 'DELETE',
        path: '/books/delete/{id}',
        handler: handlers.deleteBook,
        options: {
            validate: {
                params: schemas.deleteBookSchema
            }
        }
    },
];

module.exports = routes;