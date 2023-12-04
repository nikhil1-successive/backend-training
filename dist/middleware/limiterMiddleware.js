"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 1000 * 60 * 1000, // 1 minute
    max: 100,
    headers: true,
});
exports.default = (req, res, next) => {
    limiter(req, res, next);
};
