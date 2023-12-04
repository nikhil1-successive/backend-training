import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

const errorHandlerMiddleware: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
  console.error(err.stack); 
  res.status(500).send('Error occurred.'); 
}; 

export default errorHandlerMiddleware;
