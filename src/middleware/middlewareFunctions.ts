import { Request, Response, NextFunction } from 'express';

class Middleware {
  middleware1(req: Request, res: Response, next: NextFunction) {
    console.log("Middleware1");
    next();
  }

  middleware2(req: Request, res: Response, next: NextFunction) {
    console.log("Middleware2");
    next();
  }
}

const middlewareInstance = new Middleware();

export const middleware1 = middlewareInstance.middleware1.bind(middlewareInstance);
export const middleware2 = middlewareInstance.middleware2.bind(middlewareInstance);
