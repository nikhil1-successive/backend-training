import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
  const secretKey = 'alpha-beta-gamma'
  const token = req.headers['authorization']  //Key:authorization //Value:Token

  if (token === null) {
    return res.status(403).json({ message: 'Token missing' })
  }
  jwt.verify(token, secretKey, (err, decodeUser) => {
    if (err) {
      return res.status(401).json({ message: 'Token invalid' })
    }
    req.user = decodeUser
    next()
  })
}
export default authMiddleware