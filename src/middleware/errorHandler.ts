import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

class ErrorHandlerMiddleware {
  handleErrors(err: any, req: Request, res: Response, next: NextFunction): void {
    console.error(err.stack);
    res.status(500).send('Error occurred.');
  }
}

const errorHandlerInstance = new ErrorHandlerMiddleware();

export default errorHandlerInstance.handleErrors.bind(errorHandlerInstance) as ErrorRequestHandler;
