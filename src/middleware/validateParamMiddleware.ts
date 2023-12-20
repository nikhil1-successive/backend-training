import { Request, Response, NextFunction } from 'express';

class ParameterValidatorMiddleware {
  validateParameters(req: Request, res: Response, next: NextFunction): void {
    try {
      const { arg1, arg2 }: any = req.body;
      if (!arg1 || !arg2) {
        res.status(400).json({ error: 'Invalid parameters' });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ParameterValidatorMiddleware;
