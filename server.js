const express = require('express')
const dotenv = require('dotenv')

const app = express()
const apiRoutes = require('./routes/apiRoutes')

const jwtMiddleWare = require('./middleware/jwt-auth')

dotenv.config()

app.use(express.json())

app.use('/api', apiRoutes)

app.listen(process.env.PORT || 8081, (err, success) => {
    if (err) return console.log(err)
    console.log(`Connected to Port ${process.env.PORT || 8081}`)
})