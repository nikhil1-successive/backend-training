import express, { Request, Response, NextFunction } from 'express';
import auth from '../middleware/auth';
import { asyncHandler, asyncFunc } from './asynchronousRoutes';
import validateParameters from './parameterRoute';
import errorHandlerMiddleware from '../middleware/errorHandler';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import customMiddleware from '../middleware/customMiddleware';
import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware';
import limiter from '../middleware/limiterMiddleware';
import { middleware1, middleware2 } from '../middleware/middlewareFunctions';
import foodData from '../utils/dataseeding';
import nameData from '../utils/mockData';
import bodyParser from 'body-parser';
import { ValidationError } from 'express-validation';
import queryValidation from '../middleware/queryMiddleware';
import validateRegistration from '../utils/registrationValidationSchema';
import locationMiddleware from '../middleware/locationMiddleware';

const router = express.Router();
const secretKey = 'Nikhil';

router.use(limiter);
router.use(express.json());
router.use(bodyParser.json());

router.post('/register', (req: Request, res: Response) => {
  nameData.push(req.body.name);
  res.json(nameData);
});

router.get('/login', (req: Request, res: Response) => {
  const { name } = req.body;
  const user = nameData.find((user) => user.name === name);
  if (user) {
    const token = jwt.sign({ name: user.name }, secretKey, { expiresIn: '10h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username' });
  }
});

router.get('/authorized', tokenVerificationMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'Welcome To Authorized Content.', user: (req as any).user });
});

router.get('/console', customMiddleware, (req: Request, res: Response) => {
  res.send('User Details');
});

router.get('/middleware', middleware1, middleware2, (req: Request, res: Response) => {
  res.send('Middleware Called');
});

router.get('/getName', (req: Request, res: Response) => {
  res.send(nameData);
});

router.get('/getFood', (req: Request, res: Response) => {
  res.send(foodData);
});

router.get('/error', errorHandlerMiddleware, (req: Request, res: Response) => {
  res.send('404 Not Found');
});

router.post('/registerUser', validateRegistration, (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.json({ message: 'Registration successful' });
});

router.get('/query', queryValidation, (req: Request, res: Response) => {
  res.json('Query.');
});

router.get('/location', locationMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'Access granted!' });
});

router.use(function (err: any, req: Request, res: Response) {
  if (err instanceof ValidationError) {
    return res.json('Unauthorized Access');
  }

  return res.json(err);
});

router.get('/protected', auth, (req: Request, res: Response) => {
  res.json({ message: 'This is a protected resource', user: (req as any).user });
});

router.get(
  '/async',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result1 = await asyncFunc(Promise.reject(401));
      const result = `${result1}`;
      return res.send(result);
    } catch (error) {
      next(error);
    }
  })
);

router.post('/params', validateParameters, (req: Request, res: Response) => {
  res.json({ message: 'Success' });
});

router.use((req: Request, res: Response, next: NextFunction) => {
  throw new Error('Error occurred!');
});

router.use(errorHandlerMiddleware);

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: err.message });
});

router.get('/errormiddleware', (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error('Something went wrong');
    res.send('Success');
  } catch (error) {
    next(error);
  }
});

router.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, 'Not Found'));
});

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

export default router;
