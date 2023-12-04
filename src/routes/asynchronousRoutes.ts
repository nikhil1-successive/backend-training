import { Request, Response, NextFunction } from 'express';

const asyncFunc = (text: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(text), 1000);
  });
};

const asyncHandler = (fun: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fun(req, res, next)).catch((error) => {
      next(error);
    });
  };

export { asyncHandler, asyncFunc };