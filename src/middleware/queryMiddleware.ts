import { Request, Response, NextFunction } from 'express';

class QueryMiddleware {
  processRequest(req: Request, res: Response, next: NextFunction): void {
    try {
      const value: any = req.query.value;
      console.log('Query:', value);

      if (isNaN(value)) {
        console.log('Query is not a number');
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(422).send('Internal Server Error');
    }
  }
}

export default QueryMiddleware;
