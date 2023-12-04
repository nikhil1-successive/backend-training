import { RateLimit } from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

const limiter: RateLimit = rateLimit({
  windowMs: 1000 * 60 * 1000, // 1 minute
  max: 100,
  headers: true,
});

export default (req: Request, res: Response, next: NextFunction) => {
  limiter(req, res, next);
};
