import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import UserData, { IUser } from '../utils/MockData';
import RateLimiterMiddleware from '../middleware/LimiterMiddleware';
import ErrorHandlerMiddleware from '../middleware/ErrorHandlingMiddleware';
import { DataSeeder } from '../utils/Dataseeding';
import validateRegistration from '../utils/RegistrationValidationSchema';
import AuthMiddleware from '../middleware/AuthMiddleware';
import validateRequest from '../utils/ValidationRules';
import ParameterValidatorMiddleware from '../middleware/ValidateParamMiddleware';
import QueryMiddleware from '../middleware/QueryMiddleware';
import GeoLocationMiddleware from '../middleware/LocationMiddleware';
import myCustomHeaderMiddleware from '../middleware/customheaderMiddleware';
import CustomMiddleware from '../middleware/CustomMiddleware';

const router: Router = express.Router();
const secretKey: string = 'alpha-beta-gamma';
const rateLimiter = new RateLimiterMiddleware();
const errorHandler = new ErrorHandlerMiddleware();
const queryMiddleware = new QueryMiddleware();
const validateParametersMiddleware = new ParameterValidatorMiddleware();
const authMiddleware = new AuthMiddleware(secretKey);
const customMiddleware = new CustomMiddleware();
const geoLocationMiddleware = new GeoLocationMiddleware({ allowedCountry: 'IN' });

router.use(express.json());
router.use(rateLimiter.processRequest.bind(rateLimiter));
router.use(errorHandler.processError.bind(errorHandler));

// hit this route by passing email and password in body. Get email and body from mockData.ts file.
router.post('/login', (req: Request, res: Response) => {
  const { email, password }: any = req.body;
  const user: IUser | undefined = UserData.getUserByEmail(email);
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

// hit this route by passing {Key:'Authorization' and Value:'Token' in Headers}. You will get Token on successfull login
router.get('/chainmiddleware', authMiddleware.authenticate, (req: Request, res: Response) => {
  res.send('Middleware Called');
});

router.post('/seeddata', (req: Request, res: Response) => {
  const dataSeeder = new DataSeeder();
  const foodData: string[] = dataSeeder.seedData();
  res.json(foodData);
  console.log('Data seeding completed');
});

// hit this route as (http://localhost:8000/routes/signup) with body {'email':'nikhil@successive.com', 'username':'aaa', 'password':'nik123'}
router.post('/signup', validateRequest('login'), validateRegistration, (req: Request, res: Response) => {
  res.json({ success: true });
});

// hit this route ex-(http://localhost:8000/routes/query?value=2)
router.get('/query', queryMiddleware.processRequest, (req: Request, res: Response) => {
  res.json('Query Send');
});

router.get('/location', geoLocationMiddleware.middleware, (req: Request, res: Response) => {
  res.send('You are authorized!');
});

router.get('/customheader', myCustomHeaderMiddleware, (req: Request, res: Response) => {
  res.send('This route has a custom header set!');
});

router.get('/custommiddleware', customMiddleware.middleware, (req: Request, res: Response) => {
  console.log('Route logic executed');
});

// hit this route as http://localhost:8000/routes/params with body { 'arg1':'12','arg2':'22'}
router.post('/params', validateParametersMiddleware.validateParameters, (req: Request, res: Response) => {
  res.json({
    message: 'Success',
    status: 400,
    location: 'body'
  });
});

export default router;
