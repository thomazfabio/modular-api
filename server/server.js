const express = require('express')
const port = 3000
const app = express()
const index = require('./Routes/main')
const user =  require('./User/Routes/UserRoutes')

app.use(express.json()) 
app.use('/', index)
app.use('/user', user)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})