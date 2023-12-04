import { Request, Response, NextFunction } from 'express';

const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware1");
  next();
};

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware2");
  next();
};

export { middleware1, middleware2 };
