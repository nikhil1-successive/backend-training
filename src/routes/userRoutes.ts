import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import customMiddleware from '../middleware/customMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import errorHandlerMiddleware from '../middleware/errorHandlingMiddleware';
import limiter from '../middleware/limiterMiddleware';
import { middleware1, middleware2 } from '../middleware/middlewareFunctions';
import userData from '../utils/mockData';
import customHeaderMiddleware from '../middleware/customheaderMiddleware';
import { dataSeeder } from '../utils/dataseeding';
import queryValidation from '../middleware/queryMiddleware';
import validateRegistration from '../utils/registrationValidationSchema';
import locationMiddleware from '../middleware/locationMiddleware';
import validateRequest from '../utils/validationRules';
import validateParameters from '../middleware/validateParamMiddleware';

const router: Router = express.Router();
const secretKey: string = 'alpha-beta-gamma';

router.use(express.json());
router.use(limiter);
router.use(customHeaderMiddleware);
router.use(errorHandlerMiddleware);

// Refer to mockData file for email and password required for authentication
router.post('/login', customMiddleware, (req: Request, res: Response) => {
  const { email, password }: any = req.body;
  const user: any = userData.find(u => u.email === email && u.password === password);
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

router.get('/chainmiddleware', customMiddleware, authMiddleware, middleware1, middleware2, (req: Request, res: Response) => {
  res.send("Middleware Called");
});

router.post('/seeddata', customMiddleware, authMiddleware, (req: Request, res: Response) => {
  const foodData: string[] = dataSeeder();
  res.json(foodData);
  console.log("Data seeding completed");
});

// http://localhost:6000/routes/signup ( body : {"email":"nik@gmail.com","username":"nik","password":"1223223"})
router.post("/signup", validateRequest("login"), validateRegistration, (req: Request, res: Response) => {
  res.json({ success: true });
});

// http://localhost:8000/routes/query?value=ew (hit query route like this)
router.get('/query', queryValidation, (req: Request, res: Response) => {
  res.json("Query Send");
});

// hit this route - (http://localhost:6000/routes/location)
router.get('/location', locationMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'Access granted!' });
});

// hit this route - (http://localhost:6000/routes/params) with body ({ "arg1":"a","arg2":"s"})
router.post('/params', validateParameters, (req: Request, res: Response) => {
  res.json({
    message: 'Success',
    status: 400,
    location: 'body'
  });
});

export default router;
