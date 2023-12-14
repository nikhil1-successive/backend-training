"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
};
exports.default = errorHandlerMiddleware;
