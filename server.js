const express = require('express')
const dotenv = require('dotenv')

const app = express()
const jwtMiddleWare = require('./middleware/jwt-auth')
const { sign } = require('./jwt/jwt-module')

dotenv.config()

app.get('/', (req, res) => res.send(res.send(sign('priyesh'))))
app.get('/verify', jwtMiddleWare,(req, res) => {
    res.send(`${req.user} - ${req.time}`)
})

app.listen(process.env.PORT || 8081, (err, success) => {
    if (err) return console.log(err)
    console.log(`Connected to Port ${process.env.PORT || 8081}`)
})