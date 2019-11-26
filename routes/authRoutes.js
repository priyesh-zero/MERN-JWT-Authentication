const router = require('express').Router()

const axios = require('../axios/axios')
const { sign } = require('../jwt/jwt-module')

router.post('/login', (req, res) => {
    axios
        .get(`users?email=${req.body.email}&username=${req.body.password}`)
        .then(response => {
            if (response.data.length > 0) { 
                res.json({
                    success: true,
                    code: 200,
                    token: sign(response.data[0].id)
                })
             } else {
                res.json({
                    success: false,
                    code: 401,
                    error: 'Invalid Credentials'
                })
             }
        })
        .catch(err => {
            res.json({
                success: false,
                code: 500,
                error: 'Error with the Database'
            })
        })
})

module.exports = router