import { Request, Response, NextFunction } from 'express';

class ParameterValidatorMiddleware {
  validateParameters(req: Request, res: Response, next: NextFunction): void {
    try {
      const { arg1, arg2 }: { arg1: string, arg2: string } = req.body;

      if (!arg1 || !arg2) {
        res.status(400).json({ error: 'Invalid parameters' });
        return; // Added return to stop execution if parameters are invalid
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ParameterValidatorMiddleware;
