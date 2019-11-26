const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

app.listen(process.env.PORT || 8081, (err, success) => {
    if (err) return console.log(err)
    console.log(`Connected to Port ${process.env.PORT || 8081}`)
})