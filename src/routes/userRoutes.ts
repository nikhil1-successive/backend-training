import express, { Request, Response, NextFunction, Router } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import customMiddleware from '../middleware/customMiddleware';
import { middleware1, middleware2 } from '../middleware/middlewareFunctions';
import foodData from '../utils/dataseeding';
import nameData from '../utils/mockData';
import { ValidationError } from 'express-validation';
import queryValidation from '../middleware/queryMiddleware';
import validateRegistration from '../utils/registrationValidationSchema';
import locationMiddleware from '../middleware/locationMiddleware';
import auth from '../middleware/auth';
import { asyncHandler, asyncFunc } from './asynchronousRoutes';
import validateParameters from './parameterRoute';
import errorHandlerMiddleware from '../middleware/errorHandler';

interface UserData {
  name: string;
}

const secretKey = 'Nikhil';

function setupRoutes(router: Router): void {
  router.post('/register', registerUser);
  router.get('/console', customMiddleware, consoleEndpoint);
  router.get('/middleware', middleware1, middleware2, middlewareEndpoint);
  router.get('/getName', getName);
  router.get('/getFood', getFood);
  router.get('/error', errorHandlerMiddleware, errorEndpoint);
  router.post('/registerUser', validateRegistration, registerUser);
  router.get('/query', queryValidation, queryEndpoint);
  router.get('/location', locationMiddleware, locationEndpoint);
  router.use(validationError);
  router.get('/protected', auth, protectedEndpoint);
  router.get('/async', asyncHandler(asyncFunction));
  router.post('/params', validateParameters, paramsEndpoint);
  router.use(handleError);
  router.get('/errormiddleware', errorMiddleware);
  router.get('/gethealth', healthFunction);
  router.use(notFound);
  router.use(handleGlobalError);
}

function consoleEndpoint(req: Request, res: Response): void {
  res.send('User Details');
}

function middlewareEndpoint(req: Request, res: Response): void {
  res.send('Middleware Called');
}

function getName(req: Request, res: Response): void {
  res.send(nameData);
}

function getFood(req: Request, res: Response): void {
  res.send(foodData);
}

function healthFunction(req: Request, res: Response): void {
  res.json({ message: 'Health Is Ok' });
}

function errorEndpoint(req: Request, res: Response): void {
  res.send('404 Not Found');
}

function queryEndpoint(req: Request, res: Response): void {
  res.json('Query.');
}

function locationEndpoint(req: Request, res: Response): void {
  res.json({ message: 'Access granted!' });
}

function validationError(err: any, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ValidationError) {
    res.json('Unauthorized Access');
  } else {
    next(err);
  }
}

function protectedEndpoint(req: Request, res: Response): void {
  res.json({ message: 'This is a protected resource', user: req.user });
}

async function asyncFunction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await new Promise((_, reject) => reject(createError(401, 'Unauthorized')));
    res.send('Success');
  } catch (error) {
    next(error);
  }
}

function paramsEndpoint(req: Request, res: Response): void {
  res.json({ message: 'Success' });
}

function handleError(err: any, req: Request, res: Response, next: NextFunction): void {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: err.message });
}

function errorMiddleware(req: Request, res: Response, next: NextFunction): void {
  try {
    throw new Error('Something went wrong');
    res.send('Success');
  } catch (error) {
    next(error);
  }
}

function notFound(req: Request, res: Response, next: NextFunction): void {
  next(createError(404, 'Not Found'));
}

function handleGlobalError(err: any, req: Request, res: Response, next: NextFunction): void {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
}

function registerUser(req: Request, res: Response): void {
  try {
    const newUser: UserData = req.body;

    if (!newUser || !newUser.name) {
      throw createError(400, 'Invalid user data');
    }

    nameData.push(newUser.name);
    res.json(nameData);
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message });
  }
}

const router: Router = express.Router();
setupRoutes(router);

// export default router;
