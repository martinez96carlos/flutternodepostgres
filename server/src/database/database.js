const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'company',
    user: 'postgres',
    password: 'admin',
    port: '5432'
});

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// });  

module.exports = pool;