"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const limiter = rateLimit({
    windowMs: 1000 * 60 * 1000, // 1 minute
    max: 100,
    headers: true,
});
exports.default = (req, res, next) => {
    limiter(req, res, next);
};
