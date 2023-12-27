import { Request, Response, NextFunction } from 'express';

interface ICustomRequest extends Request {
  timestamp?: number;
}
class CustomMiddleware {
  //middleware method
  middleware(req: ICustomRequest, res: Response, next: NextFunction): void {
    const data = [req.method, req.url, req.timestamp];
    console.log("Data", data)
    const timestamp = Date.now();
    req.timestamp = timestamp;
    const time = Math.floor(timestamp / 1000);
    console.log(time);
    res.send(data);
    next();
  }
}
export default CustomMiddleware
