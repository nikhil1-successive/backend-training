import { Request, Response, NextFunction } from 'express';

const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const timestamp:any = Date.now();
  req.timestamp = timestamp;

  const data = [req.method, req.url, timestamp];

  const time = Math.floor(timestamp / 1000);
  console.log(time);
  res.json(data); 

  
};

export default customMiddleware;
