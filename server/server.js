const express = require('express')
const port = 3000
const app = express()
const index = require('./Routes/main')

app.use('/', index)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})