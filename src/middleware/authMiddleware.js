import jwt from "jsonwebtoken"
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']

  if (token === null) {
    return res.status(403).json({ message: 'Token Missing.' })
  }
  jwt.verify(token, secretKey, (err, decodeUser) => {
    if (err) {
      return res.status(401).json({ message: 'Token Invalid.' })
    }
    req.user = decodeUser
    next()
  })
}
export default authMiddleware