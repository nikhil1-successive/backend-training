"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlerMiddleware {
    //processError Method
    processError(err, req, res, next) {
        res.status(500).json({
            error: 'Internal Server Error',
            message: err.message,
        });
    }
}
exports.default = ErrorHandlerMiddleware;
