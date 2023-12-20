import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

interface CustomRateLimitOptions {
  windowMs: number;
  max: number;
  headers: boolean;
  // Add other options as needed
}

class RateLimiter {
  private limiter: any; // Use 'any' for flexibility in the example

  constructor(options: CustomRateLimitOptions) {
    this.limiter = rateLimit(options);
  }

  middleware(req: Request, res: Response, next: NextFunction): void {
    this.limiter(req, res, next);
  }
}

// Example usage:
const rateLimiterInstance = new RateLimiter({
  windowMs: 1000 * 60 * 1000,
  max: 100,
  headers: true,
});

export default rateLimiterInstance.middleware.bind(rateLimiterInstance);
