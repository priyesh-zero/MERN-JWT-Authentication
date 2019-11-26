const jwt = require('jsonwebtoken')

const signOptions = {
    issuer:  "Eagle-India",
    subject:  "dev@eagleindia.com",
    audience:  "eagleindia.github.io",
    expiresIn:  "1h",
    algorithm:  "RS256"
}

const verifyOptions = {
    issuer:  "Eagle-India",
    subject:  "dev@eagleindia.com",
    audience:  "eagleindia.github.io",
    expiresIn:  "1h",
    algorithm:  ["RS256"]
}

module.exports = {
    sign: (userId) => {
        return jwt.sign({ userId: userId}, process.env.PRIVATE_KEY, signOptions)
    },
    verify: (token) => {
        try {
            return jwt.verify(token, process.env.PUBLIC_KEY, verifyOptions)
        } catch {
            return null
        }
    }
}