const sql = require('mssql');

const config = {
    user: 'testadmin',
    password: 'testpassword',
    server: 'DESKTOP-EEJCJOT\\SQLEXPRESS07', 
    database: 'books_db'
};

const connectionPool = new sql.ConnectionPool(config);

connectionPool.connect().then(pool => {
  console.log('Connected to MSSQL');
  return pool;
})
.catch(err => {
    console.log('Database Connection Failed! Bad Config: ', err);
});

module.exports = { connectionPool, sql }