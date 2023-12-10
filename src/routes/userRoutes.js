import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import foodData from '../utils/dataseeding.js'
import nameData from '../utils/mockData.js'
import queryValidation from '../middleware/queryMiddleware.js'
import validateRegistration from '../utils/registrationValidationSchema.js'
import locationMiddleware from '../middleware/locationMiddleware.js'
import validateRequest from '../utils/validationRules.js'
const router = express.Router()
const secretKey = 'alpha-beta-gamma'

router.use(express.json());
router.use(limiter);
router.use(customHeaderMiddleware);
router.use(errorHandlerMiddleware);

// Refer to mockData.js for email and password required for authentication
router.post('/login', customMiddleware, (req, res) => {
  const { email, password } = req.body;
  const user = userData.find(u => u.email === email && u.password === password);

  router.get('/login', (req, res) => {
    const { name } = req.body
    const user = nameData.find((user) => user.name === name)
    if (user) {
      const token = jwt.sign(
        { email: user.email },
        secretKey,
        { expiresIn: '1h' }
      );
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  })


  router.get('/chainMiddleware', customMiddleware, authMiddleware, middleware1, middleware2, (req, res) => {
    res.send("Middleware Called")
  })

  // http://localhost:8000/routes/query?value=ew (hit query route like this)
  router.get('/query', queryValidation, (req, res) => {
    res.json("Query Send")
  })

  router.get('/location', locationMiddleware, (req, res) => {
    res.json({ message: 'Access granted!' });
  });

  export default router