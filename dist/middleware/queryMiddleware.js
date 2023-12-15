"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateParameters = (req, res, next) => {
    const { arg1, arg2 } = req.body;
    if (arg1.trim() === '' || arg2.trim() === '') {
        return res.status(400).json({ error: 'Invalid parameters' });
    }
    next();
};
exports.default = validateParameters;
