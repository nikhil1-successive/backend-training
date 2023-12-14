import { rateLimit } from 'express-rate-limit'
const limiter = rateLimit({
    windowMs: 1000 * 60 * 1000,
    limit: 10,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})
export default limiter