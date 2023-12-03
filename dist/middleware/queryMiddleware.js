"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryValidation = () => (req, res, next) => {
    const params = req.body;
    for (const param of params) {
        const paramVal = req.body[param];
        if (paramVal === undefined || isNaN(Number(paramVal))) {
            return res.status(400).json({
                error: 'Not A Numeric Value ' + param,
            });
        }
    }
    next();
};
exports.default = queryValidation;
