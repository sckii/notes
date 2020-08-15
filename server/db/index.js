const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'notes',
    password: 'samuino123',
    port: 6666,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}