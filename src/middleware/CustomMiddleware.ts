import { Request, Response, NextFunction } from 'express';

interface ICustomRequest extends Request {
  timestamp?: number;
}

class CustomMiddleware {
  // middleware method
  middleware(req: ICustomRequest, res: Response, next: NextFunction): void {
    const data = [req.method, req.url, new Date()];
    console.log('Data', data);
    res.send(data);
    next();
  }
}
export default CustomMiddleware;
