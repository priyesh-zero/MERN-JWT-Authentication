var router = require('express').Router()

router.post('/login', (req, res) => {
    res.json(req.body)
})

module.exports = router