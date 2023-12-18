import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

const limiter = rateLimit({
  windowMs: 1000 * 60 * 1000,
  max: 100,
  headers: true,
});

const rateLimiterMiddleware = (req: Request, res: Response, next: NextFunction) => {
  limiter(req, res, next);
};

export default rateLimiterMiddleware;
