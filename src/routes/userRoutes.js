import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware.js'
import { errorHandlerMiddleware } from "../middleware/errorHandlingMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import foodData from '../utils/dataseeding.js'
import nameData from '../utils/mockData.js'
import bodyParser from "body-parser"
import { validate, ValidationError } from 'express-validation'

const router = express.Router()
const secretKey = 'Nikhil'
router.use(limiter)
router.use(express.json())
router.use(bodyParser.json())
router.post('/register', (req, res) => {
  nameData.push(req.body.name)
  res.json(nameData)
})

router.get('/login', (req, res) => {
  const { name } = req.body
  const user = nameData.find((user) => user.name === name)
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

router.get('/authorized', tokenVerificationMiddleware, (req, res) => {
  res.json({ message: 'Welcome To Authorized Content.', user: req.user })
})
router.get('/console', customMiddleware, (req, res) => {
  res.send("User Details")
})

router.get('/middleware', middleware1, middleware2, (req, res) => {
  res.send("Middleware Called")
})

router.get('/getName', (req, res) => {
  res.send(nameData)
})

router.get('/getFood', (req, res) => {
  res.send(foodData)
})
router.get('/error', errorHandlerMiddleware, (req, res) => {
  res.send("404 Not Found")
})
router.post('/login', validate(loginValidation, {}, {}), (req, res) => {
  res.json("You are successfully verified.")
})

router.use(function (err, res) {
  if (err instanceof ValidationError) {
    return res.json("Unauthorized Access")
  }

  return res.json(err)
})

export default router