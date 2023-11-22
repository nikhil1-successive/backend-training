import express from 'express'
import users from '../utils/mockData.js'
import jwt from 'jsonwebtoken'
import { validate, ValidationError, Joi } from 'express-validation'

const router = express.Router()
const secretKey = '786'

router.get('/', (req, res) => {
  res.json(users)
})

router.use(express.json())
router.post('/', (req, res) => {
  users.push(req.body)
  res.json(users)
})

router.get('/login', (req, res) => {
  const { name } = req.body
  const user = users.find((user) => user.name === name)
  if (user) {
    const token = jwt.sign(
      { name: user.name },
      secretKey,
      { expiresIn: '10h' }
    )
    res.json({ token })
  } else {
    res.status(401).json({ message: 'Invalid username' })
  }
})

const tokenVerificationMiddleware = (req, res, next) => {
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

router.get('/authorized', tokenVerificationMiddleware, (req, res) => {
  res.json({ message: 'Welcome To Authorized Content.', user: req.user })
})

const loginValidation = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
}

router.post('/validation', validate(loginValidation, {}, {}), (req, res) => {
  res.json("You are successfully verified.")
})

router.use(function (err, res) {
  if (err instanceof ValidationError) {
    return res.json("Unauthorized Access")
  }

  return res.json(err)
})

export default router