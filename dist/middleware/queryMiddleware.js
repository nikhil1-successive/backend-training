"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryMiddleware = (req, res, next) => {
    const value = req.query.value;
    console.log("Query:", value);
    if (isNaN(Number(value))) {
        console.log("Query is not a number");
        return res.status(422).json({ error: 'Invalid value in query parameter' });
    }
    next();
};
exports.default = queryMiddleware;
