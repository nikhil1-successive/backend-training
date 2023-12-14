import jwt from "jsonwebtoken"
import createError from 'http-errors'

const authMiddleware = (req, res, next) => {
  const secretKey = 'alpha-beta-gamma'
  const token = req.headers['authorization']  //Key:authorization //Value:Token

  if (token === null) {
    next(createError(403, 'Please provide token'))
  }
  jwt.verify(token, secretKey, (err, decodeUser) => {
    if (err) {
      next(createError(401, 'Unauthorized'))
    }
    req.user = decodeUser
    next()
  })
}
export default authMiddleware