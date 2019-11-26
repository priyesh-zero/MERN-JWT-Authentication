const router = require('express').Router()

const axios = require('../axios/axios')
const jwtMiddleWare = require('../middleware/jwt-auth')
const { sign } = require('../jwt/jwt-module')

router
    .post('/login', (req, res) => {
        axios
            .get(`users?email=${req.body.email}&username=${req.body.password}`)
            .then(response => {
                if (response.data.length > 0) { 
                    response.data[0]['token'] = sign(response.data[0].id)
                    res.json({
                        success: true,
                        code: 200,
                        user: response.data[0]
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

    .get('/verify', jwtMiddleWare, (req, res) => {
        console.log(req.userId)
        axios
            .get(`users/${req.user}`)
            .then(response => {
                res.json({
                    success: true,
                    code: 200,
                    data: response.data
                })
            })
            .catch(err => {
                res.json({
                    code: 500,
                    success: false,
                    error: 'Error fetching user details'
                })
            })
    })

module.exports = router