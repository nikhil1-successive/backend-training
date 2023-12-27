"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomMiddleware {
    //middleware method
    middleware(req, res, next) {
        const data = [req.method, req.url, req.timestamp];
        console.log("Data", data);
        const timestamp = Date.now();
        req.timestamp = timestamp;
        const time = Math.floor(timestamp / 1000);
        console.log(time);
        res.send(data);
        next();
    }
}
exports.default = CustomMiddleware;
