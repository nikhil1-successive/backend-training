import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import authMiddleware from '../middleware/authMiddleware.js'
import errorHandlerMiddleware from "../middleware/errorHandlingMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import userData from '../utils/mockData.js'
import customHeaderMiddleware from '../middleware/customheaderMiddleware.js'
import { dataSeeder } from '../utils/dataseeding.js';

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
});

router.get('/chainMiddleware', customMiddleware, authMiddleware, middleware1, middleware2, (req, res) => {
  res.send("Middleware Called")
})

router.post('/seedData', customMiddleware, authMiddleware, (req, res) => {
  const foodData = dataSeeder();
  res.json(foodData);
  console.log("Data seeding completed");
});

export default router