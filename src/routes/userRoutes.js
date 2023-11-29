import express from 'express'
import users from '../utils/mockData.js'
import auth from '../middleware/auth.js'
import { asyncHandler, asyncFunc } from "./asynchronousRoutes.js"
import validateParameters from './parameterRoute.js'
import errorHandlerMiddleware from '../middleware/errorHandler.js'
import {
  AddUserController,
  LoginController,
} from '../controllers/UserController.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(users)
})

router.use(express.json())

router.post('/', AddUserController)

router.get('/login', LoginController)

router.get('/protected', auth, (req, res) => {
  res.json({ message: 'This is a protected resource', user: req.user })
})

router.get('/async', asyncHandler(async (req, res) => {
  const result1 = await asyncFunc(Error(401))
  const result = `${result1}`
  return res.send(result)
}))

router.post('/params', validateParameters, (req, res) => {
  res.json({ message: 'Success' });
});
router.get('/errors',errorHandlerMiddleware, (req, res) => {
  res.json(data)
})

export default router