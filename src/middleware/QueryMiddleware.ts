import { Request, Response, NextFunction } from 'express';

class QueryMiddleware {
  processRequest(req: Request, res: Response, next: NextFunction): void {
    try {
      const value: string | undefined = req.query.value as string;
      console.log('Query:', value)
      if (value === undefined) {
        console.log('Query parameter "value" is missing');
      } else {
        const numericValue: number = parseInt(value, 10);
        if (isNaN(numericValue)) {
          console.log('Query is not a number');
          throw new Error('Query is not a number')
        } else {
          console.log('Query:', numericValue);
        }
      }
      next();
    } catch (error: any) {
      console.error(error);
      res.status(422).send(
        {
          status: 422,
          message: error.message,
          location: "query",
        }
      )
    }
  }
}

export default QueryMiddleware;
