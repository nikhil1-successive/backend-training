import { Request, Response, NextFunction } from 'express';

class ErrorHandlerMiddleware {
  //processError Method
  processError(err: Error, req: Request, res: Response, next: NextFunction): void {
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
    });
    next()
  }
}
export default ErrorHandlerMiddleware;
