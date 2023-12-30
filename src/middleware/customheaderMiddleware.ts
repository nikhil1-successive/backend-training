import { Request, Response, NextFunction } from 'express';

type ICustomHeaderMiddleware = (req: Request, res: Response, next: NextFunction) => void;
// addCustomHeader Method
const addCustomHeader = (header: string, headerVal: string): ICustomHeaderMiddleware => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(header, headerVal);
    next();
  };
};
// instance of class
const myCustomHeaderMiddleware: ICustomHeaderMiddleware = addCustomHeader('MyHeader', 'Header1');
export = myCustomHeaderMiddleware;
