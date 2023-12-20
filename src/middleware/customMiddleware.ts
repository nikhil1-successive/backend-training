import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  timestamp?: number;
}

class CustomMiddleware {
  middleware(req: CustomRequest, res: Response, next: NextFunction): void {
    const data = [req.method, req.url, req.timestamp];

    const timestamp = Date.now();
    req.timestamp = timestamp;

    const time = Math.floor(timestamp / 1000);
    console.log(time);

    res.send(data);

    next();
  }
}

export default CustomMiddleware
