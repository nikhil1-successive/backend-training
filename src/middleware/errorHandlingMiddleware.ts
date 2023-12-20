import { Request, Response, NextFunction } from 'express';

class ErrorHandlerMiddleware {
  processError(err: any, req: Request, res: Response, next: NextFunction): void {
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
    });
  }
}

export default ErrorHandlerMiddleware;
