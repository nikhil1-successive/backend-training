import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import foodData from '../utils/dataseeding.js'
import nameData from '../utils/mockData.js'
import bodyParser from "body-parser"
import queryValidation from '../middleware/queryMiddleware.js'
import validateRegistration from '../utils/registrationValidationSchema.js'
import locationMiddleware from '../middleware/locationMiddleware.js'
import validateRequest from '../utils/validationRules.js'

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

router.post('/signup', validateRegistration, validateRequest("login"), (req, res) => {
  const { username, email, password } = req.body;
  console.log('Email:', email);
  res.json({ message: 'Registration successful', data: { email } });
});

// http://localhost:8000/routes/query?value=ew (hit query route like this)
router.get('/query', queryValidation, (req, res) => {
  res.json("Query Send")
})

router.get('/location', locationMiddleware, (req, res) => {
  res.json({ message: 'Access granted!' });
});

export default router