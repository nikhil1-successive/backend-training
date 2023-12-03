import { RateLimit } from 'express-rate-limit';

const limiter: RateLimit = {
  windowMs: 1000 * 60 * 1000,
  max: 100,
  headers: false,
};

export default limiter;
