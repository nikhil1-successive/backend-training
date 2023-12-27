"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
class RateLimiterMiddleware {
    constructor() {
        this.limiter = (0, express_rate_limit_1.default)({
            max: 100,
            windowMs: 60 * 1000,
        });
    }
    // processRequest Method
    processRequest(req, res, next) {
        this.limiter(req, res, next);
    }
}
module.exports = RateLimiterMiddleware;
