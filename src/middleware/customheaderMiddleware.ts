import { Request, Response, NextFunction } from 'express';

interface CustomHeaderMiddleware {
  (req: Request, res: Response, next: NextFunction): void;
}
//addCustomHeader Method
const addCustomHeader = (header: string, headerVal: string): CustomHeaderMiddleware => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(header, headerVal);
    next();
  };
};
// instance of class
const myCustomHeaderMiddleware: CustomHeaderMiddleware = addCustomHeader('MyHeader', 'Header1');
export = myCustomHeaderMiddleware;
