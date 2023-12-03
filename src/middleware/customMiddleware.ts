import { Request, Response, NextFunction } from 'express';

const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data = [req.method, req.url, req.timestamp];

  const timestamp = Date.now();
  req.timestamp = timestamp;

  const time = Math.floor(timestamp / 1000);
  console.log(time);

  res.send(data);

  next();
};

export default customMiddleware;
