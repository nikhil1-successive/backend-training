import express from 'express'
import jwt from 'jsonwebtoken'
import customMiddleware from "../middleware/customMiddleware.js"
import authMiddleware from '../middleware/authMiddleware.js'
import errorHandlerMiddleware from "../middleware/errorHandlingMiddleware.js"
import limiter from '../middleware/limiterMiddleware.js'
import { middleware1, middleware2 } from '../middleware/middlewareFunctions.js'
import nameData from '../utils/mockData.js'
import customHeaderMiddleware from '../middleware/customheaderMiddleware.js'
import { dataSeeder } from '../utils/dataseeding.js';

const router = express.Router()
const secretKey = 'alpha-beta-gamma'

router.use(express.json());
router.use(limiter);
router.use(customHeaderMiddleware);
router.use(errorHandlerMiddleware);

router.get('/login', customMiddleware, (req, res) => {
  const { name } = req.body;
  const user = nameData.find((u) => u === name);
  if (user) {
    const token = jwt.sign(
      { name: user.name },
      secretKey,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username' });
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