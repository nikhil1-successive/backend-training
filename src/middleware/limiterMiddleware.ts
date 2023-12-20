import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

class RateLimiterMiddleware {
  private limiter: ReturnType<typeof rateLimit>;

  constructor() {
    this.limiter = rateLimit({
      max: 100, 
      windowMs: 60 * 1000, 
    });
  }

  processRequest(req: Request, res: Response, next: NextFunction): void {
    this.limiter(req, res, next);
  }
}

export = RateLimiterMiddleware;
