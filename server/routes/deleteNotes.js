const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const dleted = await db.query(' DELETE FROM texts WHERE text_id = $1', [id])

    res.send(dleted)

})