const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-strategy').strategy

const app = express()

passport.use(new GoogleStrategy())

//route handler
// app.get('/', (req, res) => {
//   res.send({ hi: 'Lynette' })
// })

const PORT = process.env.PORT || 5000
app.listen(5000)