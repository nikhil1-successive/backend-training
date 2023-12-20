import { Request, Response, NextFunction } from 'express';

class ParameterValidator {
  static validate(req: Request, res: Response, next: NextFunction): void {
    const { arg1, arg2 }: any = req.body;

    if (!arg1 || !arg2) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    next();
  }
}

export default ParameterValidator;
