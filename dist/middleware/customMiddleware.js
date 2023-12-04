"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customMiddleware = (req, res, next) => {
    const timestamp = Date.now();
    req.timestamp = timestamp;
    const data = [req.method, req.url, timestamp];
    const time = Math.floor(timestamp / 1000);
    console.log(time);
    res.json(data);
};
exports.default = customMiddleware;
