import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import authMiddleware from '../middleware/authMiddleware.js'
import errorHandlerMiddleware from "../middleware/errorHandlingMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
// import foodData from '../utils/dataseeding.js'
import nameData from '../utils/mockData.js'
import customHeaderMiddleware from '../middleware/customheaderMiddleware.js'
import { dataseeder } from '../utils/dataseeding.js'

const router = express.Router()
const secretKey = 'Nikhil'
router.use(express.json())
router.use(limiter)
router.use(customHeaderMiddleware)
router.use(errorHandlerMiddleware);
router.post('/registerauth', (req, res) => {
  if (req.body.name) {
    nameData.push(req.body.name)
    res.json(nameData)
  }
})

router.get('/login',(req, res) => {
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


router.get('/console', authMiddleware,customMiddleware, (req, res) => {
  res.send("User Details")
})

router.get('/middleware',authMiddleware, middleware1, middleware2, (req, res) => {
  res.send("Middleware Called")
})


router.post('/seeddata',dataseeder, (req, res) => {
    res.json(foodData)
    console.log("Data seeding completed")
  
})

router.get('/getfood', authMiddleware,(req, res) => {
  res.send(foodData)
})
router.get('/error',authMiddleware, (req, res) => {
  throw new Error('Error!');
});

export default router