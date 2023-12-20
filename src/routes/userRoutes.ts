import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import UserData, { User } from '../utils/mockData';
import RateLimiterMiddleware from '../middleware/limiterMiddleware';
import ErrorHandlerMiddleware from '../middleware/errorHandlingMiddleware';
import DataSeeder from '../utils/dataseeding';
import validateRegistration from '../utils/registrationValidationSchema';
import LocationMiddleware from '../middleware/locationMiddleware';
import AuthMiddleware from '../middleware/authMiddleware';
import validateRequest from '../utils/validationRules';
import ParameterValidatorMiddleware from '../middleware/validateParamMiddleware';
import QueryMiddleware from '../middleware/queryMiddleware';
import CustomMiddleware from '../middleware/customMiddleware';

const router: Router = express.Router();
const secretKey: string = 'alpha-beta-gamma';
const rateLimiter = new RateLimiterMiddleware();
const userData = new UserData();
const errorHandler = new ErrorHandlerMiddleware();
const dataSeeder = new DataSeeder();
const queryMiddleware = new QueryMiddleware();
const locationMiddleware = new LocationMiddleware();
const customMiddleware = new CustomMiddleware()
const validateParametersMiddleware = new ParameterValidatorMiddleware();
const authMiddleware = new AuthMiddleware(secretKey);

router.use(express.json());
router.use(rateLimiter.processRequest.bind(rateLimiter));
router.use(dataSeeder.seedData.bind(dataSeeder));
router.use(errorHandler.processError.bind(errorHandler));

router.post('/login', customMiddleware.middleware, (req: Request, res: Response) => {
  const { email, password }: any = req.body;
  const user: User | undefined = UserData.getUserByEmail(email);

  if (user && user.password === password) {
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

router.get('/chainmiddleware', authMiddleware.authenticate, (req: Request, res: Response) => {
  res.send("Middleware Called");
});

router.post('/seeddata', (req: Request, res: Response) => {
  const foodData: string[] = dataSeeder.seedData()
  res.json(foodData);
  console.log("Data seeding completed");
});

router.post("/signup", validateRequest("login"), validateRegistration, (req: Request, res: Response) => {
  res.json({ success: true });
});

router.get('/query', queryMiddleware.processRequest, (req: Request, res: Response) => {
  res.json("Query Send");
});

router.get('/location', locationMiddleware.processRequest, (req: Request, res: Response) => {
  res.json({ message: 'Access granted!' });
});

router.post('/params', validateParametersMiddleware.validateParameters, (req: Request, res: Response) => {
  res.json({
    message: 'Success',
    status: 400,
    location: 'body'
  });
});

export default router;
