const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

router.post('/', async (req, res) => {
    const { text } = req.body
    const added = await db.query('INSERT INTO texts(text) VALUES($1) RETURNING *', [text])

    res.send(added)

})