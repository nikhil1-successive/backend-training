"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error occurred.');
};
exports.default = errorHandlerMiddleware;
