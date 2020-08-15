const express = require('express')
const cors = require('cors')
const mountRoutes = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())
mountRoutes(app)

app.listen(3333)
