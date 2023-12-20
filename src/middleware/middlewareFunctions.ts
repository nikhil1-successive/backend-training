import { Request, Response, NextFunction } from 'express';

class MiddlewareHandler {
  middleware1(req: Request, res: Response, next: NextFunction): void {
    console.log('Middleware1');
    next();
  }

  middleware2(req: Request, res: Response, next: NextFunction): void {
    console.log('Middleware2');
    next();
  }
}

const middlewareHandler = new MiddlewareHandler();

export const { middleware1, middleware2 } = middlewareHandler;
