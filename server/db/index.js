const { Pool } = require('pg')
const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: ,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}
