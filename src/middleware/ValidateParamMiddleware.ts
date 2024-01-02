import { Request, Response, NextFunction } from 'express';

class ParameterValidatorMiddleware {
  validateParameters(req: Request, res: Response, next: NextFunction): void {
    try {
      const { arg1, arg2 }: { arg1: string, arg2: string } = req.body;
      if (!arg1 || !arg2) {
        res.status(400).json({
          message: 'Invalid Parameters',
          status: 400,
          location: 'body',
          error: 'Invalid parameters'
        });
        return;
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
export default ParameterValidatorMiddleware;
