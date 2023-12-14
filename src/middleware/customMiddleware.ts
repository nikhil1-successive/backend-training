import { Request, Response, NextFunction } from 'express';

const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`Timestamp: ${timestamp}, Request Method: ${req.method}, Request Url: ${req.url}`);
  next();
};

export default customMiddleware;
