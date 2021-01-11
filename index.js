const express = require('express')
require('./services/passport')

const app = express()

//route handler
// app.get('/', (req, res) => {
//   res.send({ hi: 'Lynette' })
// })
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)