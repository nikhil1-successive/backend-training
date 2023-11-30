import express from 'express'
import users from '../utils/mockData.js'
import auth from '../middleware/auth.js'
import { asyncHandler, asyncFunc } from "./asynchronousRoutes.js"
import validateParameters from './parameterRoute.js'
import errorHandlerMiddleware from '../middleware/errorHandler.js'
import { user } from '../utils/generateError.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(users)
})

router.use(express.json())

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

router.use((req, res, next) => {
  throw new Error('Error occured!');
});

router.use(errorHandlerMiddleware);

router.use((req, res, next) => {
  const userId = parseInt(req.params.userId, 10);
  if (!user[userId]) {
    const error = new Error('User not found');
    error.status = 404;
    next(error);
    return;
  }
  req.userData = user[userId];
  next();
});

router.get('/user/:userId', (req, res, next) => {
  try {
    if (req.query.error === 'user') {
      throw new Error('Error');
    }
    res.json(req.userData);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: err.message });
});

export default router