import express, { Request, Response, NextFunction, Router } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import bodyParser from 'body-parser';
import limiter from '../middleware/limiterMiddleware';
import customMiddleware from '../middleware/customMiddleware';
// import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware';
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

interface TokenPayload {
  name: string;
}

class MyRouter {
  public router: Router;

  private secretKey = 'Nikhil';

  constructor() {
    this.router = express.Router();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.router.use(limiter);
    this.router.use(express.json());
    this.router.use(bodyParser.json());
  }

  private setupRoutes(): void {
    // this.router.post('/register', this.registerUser.bind(this));
    // this.router.get('/login', this.login.bind(this));
    // this.router.get('/authorized', tokenVerificationMiddleware, this.authorized.bind(this));
    this.router.get('/console', customMiddleware, this.console.bind(this));
    this.router.get('/middleware', middleware1, middleware2, this.middleware.bind(this));
    this.router.get('/getName', this.getName.bind(this));
    this.router.get('/getFood', this.getFood.bind(this));
    this.router.get('/error', errorHandlerMiddleware, this.error.bind(this));
    // this.router.post('/registerUser', validateRegistration, this.registerUser.bind(this));
    this.router.get('/query', queryValidation, this.query.bind(this));
    this.router.get('/location', locationMiddleware, this.location.bind(this));
    this.router.use(this.validationError.bind(this));
    this.router.get('/protected', auth, this.protected.bind(this));
    this.router.get('/async', asyncHandler(this.asyncFunction.bind(this)));
    this.router.post('/params', validateParameters, this.params.bind(this));
    this.router.use(this.handleError.bind(this));
    this.router.get('/errormiddleware', this.errorMiddleware.bind(this));
    this.router.get('/gethealth', this.healthFunction.bind(this));
    this.router.use(this.notFound.bind(this));
    this.router.use(this.handleGlobalError.bind(this));
  }

  // private registerUser(req: Request, res: Response): void {
  //   try {
  //     const newUser: UserData = req.body;

  //     if (!newUser || !newUser.name) {
  //       throw createError(400, 'Invalid user data');
  //     }

  //     nameData.push(newUser);
  //     res.json(nameData);
  //   } catch (error) {
  //     res.status(error.status || 500).json({ error: error.message });
  //   }
  // }

  // private login(req: Request, res: Response): void {
  //   const { name } = req.body;
  //   const user = nameData.find((user) => user.name === name);

  //   if (user) {
  //     const token = jwt.sign({ name: user.name }, this.secretKey, { expiresIn: '10h' });
  //     res.json({ token });
  //   } else {
  //     res.status(401).json({ message: 'Invalid username' });
  //   }
  // }

  private authorized(req: Request, res: Response): void {
    res.json({ message: 'Welcome To Authorized Content.', user: req.user });
  }

  private console(req: Request, res: Response): void {
    res.send('User Details');
  }

  private middleware(req: Request, res: Response): void {
    res.send('Middleware Called');
  }

  private getName(req: Request, res: Response): void {
    res.send(nameData);
  }

  private getFood(req: Request, res: Response): void {
    res.send(foodData);
  }

  private healthFunction(req: Request, res: Response): void {
    res.json({ message: "Health Is Ok" });
  }

  private error(req: Request, res: Response): void {
    res.send('404 Not Found');
  }

  private query(req: Request, res: Response): void {
    res.json('Query.');
  }

  private location(req: Request, res: Response): void {
    res.json({ message: 'Access granted!' });
  }

  private validationError(err: any, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof ValidationError) {
      res.json('Unauthorized Access');
    } else {
      next(err);
    }
  }

  private protected(req: Request, res: Response): void {
    res.json({ message: 'This is a protected resource', user: req.user });
  }

  private async asyncFunction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await new Promise((_, reject) => reject(createError(401, 'Unauthorized')));
      res.send('Success');
    } catch (error) {
      next(error);
    }
  }

  private params(req: Request, res: Response): void {
    res.json({ message: 'Success' });
  }

  private handleError(err: any, req: Request, res: Response, next: NextFunction): void {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ error: err.message });
  }

  private errorMiddleware(req: Request, res: Response, next: NextFunction): void {
    try {
      throw new Error('Something went wrong');
      res.send('Success');
    } catch (error) {
      next(error);
    }
  }

  private notFound(req: Request, res: Response, next: NextFunction): void {
    next(createError(404, 'Not Found'));
  }

  private handleGlobalError(err: any, req: Request, res: Response, next: NextFunction): void {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  }
}

const myRouter = new MyRouter();
export default myRouter.router;