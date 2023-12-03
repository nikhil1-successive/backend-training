import { Request, Response, NextFunction } from 'express';

const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const data = [req.method, req.url, req.timestamp]; // Assuming req.timestamp is defined elsewhere
    const timestamp = Date.now();
    const time = Math.floor(timestamp / 1000);
    console.log(time);
    res.send(data);
    next();
};

export default customMiddleware;
