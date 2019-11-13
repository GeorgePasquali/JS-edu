const { connectionPool, sql } = require('./mssql_db');

let loadRoot = function (req, h) {
    return h.redirect('/books/get').code(301);
}

let getBooks = async function (req, h) {
    const conn = await connectionPool;
    const result = await conn.request()
        .query(`SELECT * FROM dbo.Book`);

    if (result.rowsAffected > 0) {
        return h.response(result.recordset).code(200);
    } else {
        return h.response('Books not found!').code(404);
    }
}

let createBook = async function (req, h) {
    const conn = await connectionPool;
    const result = await conn.request()
        .input('name', sql.NVarChar, req.payload.name)
        .input('author', sql.NVarChar, req.payload.author)
        .input('isbn', sql.NVarChar, req.payload.isbn)
        .input('year', sql.Int, req.payload.year)
        .input('publisher', sql.NVarChar, req.payload.publisher)
        .query(`INSERT INTO dbo.Book (name, author, isbn, year, publisher) OUTPUT INSERTED.* VALUES (@name, @author, @isbn, @year, @publisher)`);

    return h.response(result.recordset).code(201);
}

let updateBook = async function (req, h) {
    const conn = await connectionPool;
    const result = await conn.request()
        .input('id', sql.Int, req.payload.id)
        .input('name', sql.NVarChar, req.payload.name)
        .input('author', sql.NVarChar, req.payload.author)
        .input('isbn', sql.NVarChar, req.payload.isbn)
        .input('year', sql.Int, req.payload.year)
        .input('publisher', sql.NVarChar, req.payload.publisher)
        .query(`UPDATE dbo.Book SET name = @name, author = @author, isbn = @isbn, year = @year, publisher = @publisher OUTPUT INSERTED.* WHERE id = @id`);

    return h.response(result.recordset).code(200);
}

let deleteBook = async function (req, h) {
    const conn = await connectionPool;
    await conn.request()
        .input('id', sql.Int, req.params.id)
        .query(`DELETE FROM dbo.Book WHERE id = @id`);

    return h.response().code(204);
}

module.exports = {
    loadRoot,
    getBooks,
    createBook,
    updateBook,
    deleteBook
}