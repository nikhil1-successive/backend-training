import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import myHeader from "../middleware/customheaderMiddleware.js"
import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware.js'
// import errorhandlingMiddleware from "../middleware/errorHandlingMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import foodData from '../utils/dataseeding.js'
import nameData from '../utils/mockData.js'

const router = express.Router()
const secretKey = 'my-secret-key'

router.use(limiter)
router.use(express.json())
router.post('/register', (req, res) => {
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


router.get('/authorized', tokenVerificationMiddleware, (req, res) => {
  res.json({ message: 'Welcome To Authorized Content.', user: req.user })
})
router.get('/console', customMiddleware, (req, res) => {
  res.send("User Details")
})
// router.get('/header', myHeader, (req, res) => {
//   res.send("User Details")
// })
router.get('/middleware', middleware1, middleware2, (req, res) => {
  res.send("Request")
})

router.get('/getName', (req, res) => {
  res.send(nameData)
})

router.get('/getFood', (req, res) => {
  res.send(foodData)
})
router.get('/error', (req, res) => {
  throw new Error('404 Not Found')
})
export default router