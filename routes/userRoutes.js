const router = require('express').Router()

const jwtMiddleWare = require('../middleware/jwt-auth')
const axios = require('../axios/axios')

router
    .get('/photos/:id', jwtMiddleWare, (req, res) => {
        axios
            .get(`/photos/${req.params.id}`)
            .then(response => {
                res.json({
                    code: 200,
                    success: true,
                    data: response.data
                })
            })
            .catch(err => {
                res.json({
                    code: 500,
                    success: false,
                    error: 'Database Error'
                })
            })
    })

    .get('/photos', jwtMiddleWare, (req, res) => {
        axios
            .get(`/photos?_limit=20`)
            .then(response => {
                res.json({
                    code: 200,
                    success: true,
                    data: response.data
                })
            })
            .catch(err => {
                res.json({
                    code: 500,
                    success: false,
                    error: 'Database Error'
                })
            })
    })

module.exports = router