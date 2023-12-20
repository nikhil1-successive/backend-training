import { Request, Response, NextFunction } from 'express';

class QueryValidator {
  validate() {
    return (req: Request, res: Response, next: NextFunction): void => {
      const params: string[] = req.body;

      for (const param of params) {
        const paramVal = req.body[param];

        if (paramVal === undefined || isNaN(Number(paramVal))) {
          return res.status(400).json({
            error: 'Not A Numeric Value ' + param,
          });
        }
      }

      next();
    };
  }
}

export default new QueryValidator().validate();
