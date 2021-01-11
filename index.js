const express = require('express')
const app = express()

//route handler
app.get('/', (req, res) => {
  res.send({ hi: 'Lynette' })
})

const PORT = process.env.PORT || 5000
app.listen(5000)