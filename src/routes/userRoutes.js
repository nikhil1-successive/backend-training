import express from 'express'
import auth from '../middleware/auth.js'
import { asyncHandler, asyncFunc } from "./asynchronousRoutes.js"
import validateParameters from './parameterRoute.js'
import errorHandlerMiddleware from '../middleware/errorHandler.js'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware.js'
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import foodData from '../utils/dataseeding.js'
import nameData from '../utils/mockData.js'
import bodyParser from "body-parser"
import { ValidationError } from 'express-validation'
import queryValidation from '../middleware/queryMiddleware.js'
import validateRegistration from '../utils/registrationValidationSchema.js'
import locationMiddleware from '../middleware/locationMiddleware.js'


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

router.post('/registerUser', validateRegistration, (req, res) => {
  const { email, password } = req.body;
  res.json({ message: 'Registration successful' });
});


router.get('/query', queryValidation, (req, res) => {
  res.json("Query.")
})

router.get('/location', locationMiddleware, (req, res) => {
  res.json({ message: 'Access granted!' });
});

router.use(function (err, res) {
  if (err instanceof ValidationError) {
    return res.json("Unauthorized Access")
  }

  return res.json(err)
})

router.get('/protected', auth, (req, res) => {
  res.json({ message: 'This is a protected resource', user: req.user })
})

router.get('/async', asyncHandler(async (req, res, next) => {
  try {
    const result1 = await asyncFunc(Promise.reject(401));
    const result = `${result1}`;
    return res.send(result);
  } catch (error) {
    next(error);
  }
}));

router.post('/params', validateParameters, (req, res) => {
  res.json({ message: 'Success' });
});

router.use((req, res, next) => {
  throw new Error('Error occured!');
});

router.use(errorHandlerMiddleware);

router.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: err.message });
});

router.get('/errormiddleware', (req, res, next) => {
  try {
    throw new Error('Something went wrong');
    res.send('Success');
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

export default router