import { Request, Response, NextFunction } from 'express';

const queryMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const value = req.query.value;

  console.log("Query:", value);

  if (isNaN(Number(value))) {
    console.log("Query is not a number");
    return res.status(422).json({ error: 'Invalid value in query parameter' });
  }

  next();
};

export default queryMiddleware;
