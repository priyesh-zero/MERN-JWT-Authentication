const { verify } = require('../jwt/jwt-module')

const jwtMiddleWare = (req, res, next) => {
    token = req.header('Authentication')
    if ( token ) {
        tokenResponse = verify(token.split(' ')[1])
        if (tokenResponse) {
            req.user = tokenResponse.userId
            next()
        } else {
            res.json({
                code: 403,
                error: "Token Expired",
                success: false
            })
        }
    } else { 
        res.sendCode(403)
    }
}

module.exports = jwtMiddleWare