import jwt from 'jsonwebtoken'
import createError from 'http-errors'

const secreyKey = "12"
const auth = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        next(createError(403, 'Please provide token'))
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            next(createError(401, 'Unauthorized'))
        }
        req.user = decoded
        next()
    })
}

export default auth