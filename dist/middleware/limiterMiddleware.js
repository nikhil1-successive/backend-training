"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
class RateLimiterMiddleware {
    constructor() {
        this.limiter = (0, express_rate_limit_1.default)({
            max: 100, // Default maxRequests
            windowMs: 60 * 1000, // Default windowMs (1 minute)
        });
    }
    processRequest(req, res, next) {
        this.limiter(req, res, next);
    }
}
module.exports = RateLimiterMiddleware;
