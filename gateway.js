const express = require('express')
const helmet = require('helmet')
const app = express()
const routes = require('./routes')
const PORT = 3020

app.use(express.json())
app.use(helmet())
app.use('/', routes)

app.listen(PORT, () => {
    console.log('Gateway has started on port ' + PORT)
})
