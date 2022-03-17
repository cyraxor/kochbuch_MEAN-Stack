const express = require('express')
require('./db/mongoose')

const categoryRouter = require('./routers/categories')
const receptRouter = require('./routers/recepts')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(categoryRouter)
app.use(receptRouter)

app.listen(port, () => {
  console.log('Kochbuch Server is up at port ' + port)
})
