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


router.get('/chainmiddleware', customMiddleware, authMiddleware, middleware1, middleware2, (req, res) => {
  res.send("Middleware Called")
})
router.get('/console', customMiddleware, (req, res) => {
  res.send("User Details")
})

router.post('/seedData', customMiddleware, authMiddleware, (req, res) => {
  const foodData = dataSeeder();
  res.json(foodData);
  console.log("Data seeding completed");
});

router.post("/signup", validateRequest("login"), validateRegistration, (req, res) => {
  res.json({ success: true })
})

// http://localhost:8000/routes/query?value=ew (hit query route like this)
router.get('/query', queryValidation, (req, res) => {
  res.json("Query Send")
})

router.get('/location', locationMiddleware, (req, res) => {
  res.json({ message: 'Access granted!' });
});

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

export default router