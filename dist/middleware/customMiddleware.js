"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`Timestamp: ${timestamp}, Request Method: ${req.method}, Request Url: ${req.url}`);
    next();
};
exports.default = customMiddleware;
