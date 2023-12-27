"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParameterValidatorMiddleware {
    validateParameters(req, res, next) {
        try {
            const { arg1, arg2 } = req.body;
            if (!arg1 || !arg2) {
                res.status(400).json({ error: 'Invalid parameters' });
            }
            next();
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = ParameterValidatorMiddleware;
